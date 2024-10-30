import { StatusCodes } from 'http-status-codes';
import { inject, injectable } from 'inversify';

import { Component } from '#src/shared/enums/index.js';
import { fillDTO } from '#src/shared/helpers/index.js';
import { Config, RestSchema } from '#src/shared/libs/config/index.js';
import { Logger } from '#src/shared/libs/logger/index.js';
import {
  BaseController,
  HttpError,
  HttpMethod,
  ValidateDtoMiddleware,
} from '#src/shared/libs/rest/index.js';
import { AuthService } from '#src/shared/modules/auth/index.js';

import { CreateUserDto } from './dto/create-user.dto.js';
import { LoginUserDto } from './dto/login-user.dto.js';
import { LoggedUserRdo } from './rdo/logged-user.rdo.js';
import { UserRdo } from './rdo/user.rdo.js';
import { CreateUserRequest } from './type/create-user.request.js';
import { CreateUserResponse } from './type/create-user.response.js';
import { LoginUserRequest } from './type/login-user.request.js';
import { LoginUserResponse } from './type/login-user.response.js';
import { UserService } from './user-service.interface.js';

@injectable()
export class UserController extends BaseController {
  constructor(
    @inject(Component.Logger) protected readonly logger: Logger,
    @inject(Component.UserService) private readonly userService: UserService,
    @inject(Component.AuthService) private readonly authService: AuthService,
    @inject(Component.Config)
    private readonly config: Config<RestSchema>,
  ) {
    super(logger);

    this.logger.info('Register routes for UserController');

    this.addRoute({
      path: '/login',
      method: HttpMethod.Post,
      handler: this.login,
      middlewares: [new ValidateDtoMiddleware(LoginUserDto)],
    });

    this.addRoute({
      path: '/register',
      method: HttpMethod.Post,
      handler: this.create,
      middlewares: [new ValidateDtoMiddleware(CreateUserDto)],
    });
  }

  public async login(
    { body }: LoginUserRequest,
    res: LoginUserResponse,
  ): Promise<void> {
    const user = await this.authService.verify(body);
    const token = await this.authService.authenticate(user);
    const loggedUserRdo = fillDTO(LoggedUserRdo, { token });
    this.ok(res, loggedUserRdo);
  }

  public async create(
    { body }: CreateUserRequest,
    res: CreateUserResponse,
  ): Promise<void> {
    const { email } = body;

    const foundUser = await this.userService.findByEmail(email);
    if (foundUser) {
      throw new HttpError(
        StatusCodes.CONFLICT,
        `User with email «${email}» exists.`,
        'UserController.create',
      );
    }

    const salt = this.config.get('SALT');
    const createdUser = await this.userService.create(body, salt);
    const userRdo = fillDTO(UserRdo, createdUser);
    this.created(res, userRdo);
  }
}
