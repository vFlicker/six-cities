import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { inject, injectable } from 'inversify';

import { fillDTO } from '#src/shared/helpers/index.js';
import { Config, RestSchema } from '#src/shared/libs/config/index.js';
import { Logger } from '#src/shared/libs/logger/index.js';
import {
  BaseController,
  HttpError,
  HttpMethod,
  ValidateDtoMiddleware,
} from '#src/shared/libs/rest/index.js';
import { Component } from '#src/shared/types/index.js';

import { CreateUserDto } from './dto/create-user.dto.js';
import { UserRdo } from './rdo/user.rdo.js';
import { CreateUserRequest } from './type/create-user-request.type.js';
import { CreateUserResponse } from './type/create-user-response.type.js';
import { UserService } from './user-service.interface.js';

@injectable()
export class UserController extends BaseController {
  constructor(
    @inject(Component.Logger) protected readonly logger: Logger,
    @inject(Component.UserService) private readonly userService: UserService,
    @inject(Component.Config)
    private readonly config: Config<RestSchema>,
  ) {
    super(logger);

    this.logger.info('Register routes for UserController');

    this.addRoute({
      path: '/register',
      method: HttpMethod.Post,
      handler: this.create,
      middlewares: [new ValidateDtoMiddleware(CreateUserDto)],
    });
  }

  public async create(
    req: CreateUserRequest,
    res: CreateUserResponse,
  ): Promise<void> {
    const { body } = req;
    const { email } = body;

    const existingUser = await this.userService.findByEmail(email);
    if (existingUser) {
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
