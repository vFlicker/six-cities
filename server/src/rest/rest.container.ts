import { Container } from 'inversify';

import { Component } from '#src/shared/enums/index.js';
import {
  Config,
  RestConfig,
  RestSchema,
} from '#src/shared/libs/config/index.js';
import {
  DatabaseClient,
  MongoDatabaseClient,
} from '#src/shared/libs/database-client/index.js';
import { ConsoleLogger, Logger } from '#src/shared/libs/logger/index.js';
import {
  AppExceptionFilter,
  AuthExceptionFilter,
  ExceptionFilter,
  HttpErrorExceptionFilter,
  ValidationExceptionFilter,
} from '#src/shared/libs/rest/index.js';

import { RestApplication } from './rest.application.js';

export function createRestApplicationContainer(): Container {
  const container = new Container();

  container
    .bind<RestApplication>(Component.RestApplication)
    .to(RestApplication)
    .inSingletonScope();

  container.bind<Logger>(Component.Logger).to(ConsoleLogger).inSingletonScope();

  container
    .bind<Config<RestSchema>>(Component.Config)
    .to(RestConfig)
    .inSingletonScope();

  container
    .bind<DatabaseClient>(Component.DatabaseClient)
    .to(MongoDatabaseClient)
    .inSingletonScope();

  container
    .bind<ExceptionFilter>(Component.AuthExceptionFilter)
    .to(AuthExceptionFilter)
    .inSingletonScope();

  container
    .bind<ExceptionFilter>(Component.ValidationExceptionFilter)
    .to(ValidationExceptionFilter)
    .inSingletonScope();

  container
    .bind<ExceptionFilter>(Component.HttpExceptionFilter)
    .to(HttpErrorExceptionFilter)
    .inSingletonScope();

  container
    .bind<ExceptionFilter>(Component.ExceptionFilter)
    .to(AppExceptionFilter)
    .inSingletonScope();

  return container;
}
