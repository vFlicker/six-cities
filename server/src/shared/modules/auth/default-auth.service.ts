import { createSecretKey } from 'node:crypto';

import { Config } from 'convict';
import { inject, injectable } from 'inversify';
import { SignJWT } from 'jose';
import { Logger } from 'pino';

import { Component } from '#src/shared/enums/index.js';
import { RestSchema } from '#src/shared/libs/config/index.js';
import { AuthenticationException } from '#src/shared/libs/rest/index.js';
import { UserDocument, UserService } from '#src/shared/modules/user/index.js';
import { LoginUserDto } from '#src/shared/modules/user/index.js';

import { JWT_ALGORITHM, JWT_EXPIRES_IN } from './auth.constant.js';
import { AuthService } from './auth-service.interface.js';
import { TokenPayload } from './types/token-payload.js';

@injectable()
export class DefaultAuthService implements AuthService {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.UserService) private readonly userService: UserService,
    @inject(Component.Config) private readonly config: Config<RestSchema>,
  ) {}

  public async verify(dto: LoginUserDto): Promise<UserDocument> {
    const foundUser = await this.userService.findByEmail(dto.email);
    if (!foundUser) {
      this.logger.warn(`User with email ${dto.email} not found`);
      throw new AuthenticationException('DefaultAuthService.verify');
    }

    if (!foundUser.verifyPassword(dto.password, this.config.get('SALT'))) {
      this.logger.warn(`Password for user ${dto.email} is incorrect`);
      throw new AuthenticationException('DefaultAuthService.verify');
    }

    return foundUser;
  }

  public async authenticate(user: UserDocument): Promise<string> {
    const jstSecret = this.config.get('JWT_SECRET');
    const secretKey = createSecretKey(jstSecret, 'utf-8');
    const jwtPayload: TokenPayload = {
      id: user.id,
      name: user.name,
      email: user.email,
    };

    this.logger.info(`Create JWT for user ${user.email}`);
    const jwt = new SignJWT(jwtPayload)
      .setProtectedHeader({ alg: JWT_ALGORITHM })
      .setIssuedAt()
      .setExpirationTime(JWT_EXPIRES_IN)
      .sign(secretKey);

    return jwt;
  }
}
