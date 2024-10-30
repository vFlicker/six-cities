import { Container } from 'inversify';

import { Component } from '#src/shared/enums/index.js';
import { ExceptionFilter } from '#src/shared/libs/rest/index.js';

import { AuthExceptionFilter } from './auth.exception-filter.js';
import { AuthService } from './auth-service.interface.js';
import { DefaultAuthService } from './default-auth.service.js';

export function createAuthContainer(): Container {
  const container = new Container();

  container
    .bind<AuthService>(Component.AuthService)
    .to(DefaultAuthService)
    .inSingletonScope();

  container
    .bind<ExceptionFilter>(Component.AuthExceptionFilter)
    .to(AuthExceptionFilter)
    .inSingletonScope();

  return container;
}
