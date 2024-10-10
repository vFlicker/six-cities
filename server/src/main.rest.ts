import 'reflect-metadata';

import { Container } from 'inversify';

import {
  createRestApplicationContainer,
  RestApplication,
} from './rest/index.js';
import { Component } from './shared/enums/index.js';
import { createApiDocContainer } from './shared/modules/api-doc/index.js';
import { createOfferContainer } from './shared/modules/offer/index.js';
import { createUserContainer } from './shared/modules/user/index.js';

async function bootstrap(): Promise<void> {
  const container = Container.merge(
    createRestApplicationContainer(),
    createApiDocContainer(),
    createUserContainer(),
    createOfferContainer(),
  );

  const application = container.get<RestApplication>(Component.RestApplication);
  await application.init();
}

bootstrap();
