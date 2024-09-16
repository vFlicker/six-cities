import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';

import { fillDTO } from '#src/shared/helpers/index.js';
import { Logger } from '#src/shared/libs/logger/index.js';
import { BaseController, HttpMethod } from '#src/shared/libs/rest/index.js';
import { Component } from '#src/shared/types/index.js';

import { UserRdo } from './rdo/user.rdo.js';
import { UserService } from './user-service.interface.js';

@injectable()
export class UserController extends BaseController {
  constructor(
    @inject(Component.Logger) protected readonly logger: Logger,
    @inject(Component.UserService) private readonly userService: UserService,
  ) {
    super(logger);

    this.logger.info('Register routes for UserController');

    this.addRoute({
      path: '/register',
      method: HttpMethod.Post,
      handler: this.create,
    });

    this.addRoute({
      path: '/',
      method: HttpMethod.Get,
      handler: this.getUsers,
    });
  }

  public async create(_req: Request, _res: Response): Promise<void> {
    throw new Error('Method not implemented.');
  }

  // TODO: remove this method
  public async getUsers(_req: Request, res: Response): Promise<void> {
    const users = await this.userService.findAll();
    const responseData = fillDTO(UserRdo, users);
    this.ok(res, { users: responseData });
  }
}
