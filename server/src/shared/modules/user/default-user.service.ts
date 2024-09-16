import { inject, injectable } from 'inversify';

import { Logger } from '#src/shared/libs/logger/index.js';
import { Component } from '#src/shared/types/index.js';

import { CreateUserDto } from './dto/create-user.dto.js';
import { UserDocument, UserEntity, UserModelType } from './user.entity.js';
import { UserService } from './user-service.interface.js';

@injectable()
export class DefaultUserService implements UserService {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.UserModel) private readonly userModel: UserModelType,
  ) {}

  public async create(dto: CreateUserDto, salt: string): Promise<UserDocument> {
    const user = new UserEntity(dto);
    user.setPassword(dto.password, salt);

    const createdUser = await this.userModel.create(user);
    this.logger.info(`User with email ${dto.email} was created`);

    return createdUser as UserDocument;
  }

  public async findByEmail(email: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ email });
  }

  public async findOrCreate(
    dto: CreateUserDto,
    salt: string,
  ): Promise<UserDocument> {
    const existedUser = await this.findByEmail(dto.email);
    if (existedUser) return existedUser;
    return this.create(dto, salt);
  }
}
