import { Container } from 'inversify';

import { Component } from '#src/shared/enums/index.js';

import { AuthService } from './auth-service.interface.js';
import { DefaultAuthService } from './default-auth.service.js';

export function createAuthContainer(): Container {
  const container = new Container();

  container
    .bind<AuthService>(Component.AuthService)
    .to(DefaultAuthService)
    .inSingletonScope();

  return container;
}
