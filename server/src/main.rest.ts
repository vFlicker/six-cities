import 'reflect-metadata';

import { Container } from 'inversify';

import {
  createRestApplicationContainer,
  RestApplication,
} from './rest/index.js';
import { createUserContainer } from './shared/modules/user/index.js';
import { Component } from './shared/types/index.js';

async function bootstrap(): Promise<void> {
  const container = Container.merge(
    createRestApplicationContainer(),
    createUserContainer(),
  );

  const application = container.get<RestApplication>(Component.RestApplication);
  await application.init();
}

bootstrap();
