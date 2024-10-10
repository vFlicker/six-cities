import { Container } from 'inversify';

import { Component } from '#src/shared/enums/index.js';
import { Controller } from '#src/shared/libs/rest/index.js';

import { DocController } from './api-doc.controller.js';
import { ApiDocService } from './api-doc-service.interface.js';
import { DefaultApiDocService } from './default-api-doc.service.js';

export function createApiDocContainer(): Container {
  const container = new Container();

  container
    .bind<ApiDocService>(Component.ApiDocService)
    .to(DefaultApiDocService)
    .inSingletonScope();

  container
    .bind<Controller>(Component.ApiDocController)
    .to(DocController)
    .inSingletonScope();

  return container;
}
