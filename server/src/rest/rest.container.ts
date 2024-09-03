import { Container } from 'inversify';

import {
  Config,
  RestConfig,
  RestSchema,
} from '#src/shared/libs/config/index.js';
import { Logger, PinoLogger } from '#src/shared/libs/logger/index.js';
import { Component } from '#src/shared/types/index.js';

import { RestApplication } from './rest.application.js';

export function createRestApplicationContainer() {
  const restApplicationContainer = new Container();

  restApplicationContainer
    .bind<RestApplication>(Component.RestApplication)
    .to(RestApplication)
    .inSingletonScope();

  restApplicationContainer
    .bind<Logger>(Component.Logger)
    .to(PinoLogger)
    .inSingletonScope();

  restApplicationContainer
    .bind<Config<RestSchema>>(Component.Config)
    .to(RestConfig)
    .inSingletonScope();

  return restApplicationContainer;
}
