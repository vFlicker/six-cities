import { Container } from 'inversify';

import { Component } from '#src/shared/types/component.enum.js';

import { DefaultUserService } from './default-user.service.js';
import { UserModel, UserModelType } from './user.entity.js';
import { UserService } from './user-service.interface.js';

export function createUserContainer(): Container {
  const container = new Container();

  container
    .bind<UserService>(Component.UserService)
    .to(DefaultUserService)
    .inSingletonScope();

  container.bind<UserModelType>(Component.UserModel).toConstantValue(UserModel);

  return container;
}
