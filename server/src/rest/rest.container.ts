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
  ExceptionFilter,
} from '#src/shared/libs/rest/index.js';

import { RestApplication } from './rest.application.js';

export function createRestApplicationContainer(): Container {
  const restApplicationContainer = new Container();

  restApplicationContainer
    .bind<RestApplication>(Component.RestApplication)
    .to(RestApplication)
    .inSingletonScope();

  restApplicationContainer
    .bind<Logger>(Component.Logger)
    .to(ConsoleLogger)
    .inSingletonScope();

  restApplicationContainer
    .bind<Config<RestSchema>>(Component.Config)
    .to(RestConfig)
    .inSingletonScope();

  restApplicationContainer
    .bind<DatabaseClient>(Component.DatabaseClient)
    .to(MongoDatabaseClient)
    .inSingletonScope();

  restApplicationContainer
    .bind<ExceptionFilter>(Component.ExceptionFilter)
    .to(AppExceptionFilter)
    .inSingletonScope();

  return restApplicationContainer;
}
