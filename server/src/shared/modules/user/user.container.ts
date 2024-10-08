import { Container } from 'inversify';

import { Component } from '#src/shared/enums/index.js';
import { Controller } from '#src/shared/libs/rest/index.js';

import { DefaultUserService } from './default-user.service.js';
import { UserController } from './user.controller.js';
import { UserModel, UserModelType } from './user.entity.js';
import { UserService } from './user-service.interface.js';

export function createUserContainer(): Container {
  const container = new Container();

  container.bind<UserModelType>(Component.UserModel).toConstantValue(UserModel);

  container
    .bind<UserService>(Component.UserService)
    .to(DefaultUserService)
    .inSingletonScope();

  container
    .bind<Controller>(Component.UserController)
    .to(UserController)
    .inSingletonScope();

  return container;
}
