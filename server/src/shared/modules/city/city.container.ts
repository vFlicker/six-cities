import { Container } from 'inversify';

import { Component } from '#src/shared/enums/index.js';
import { Controller } from '#src/shared/libs/rest/index.js';

import { CityController } from './city.controller.js';
import { CityModel, CityModelType } from './city.entity.js';
import { CityService } from './city-service.interface.js';
import { DefaultCityService } from './default-city.service.js';

export function createCityContainer(): Container {
  const container = new Container();

  container.bind<CityModelType>(Component.CityModel).toConstantValue(CityModel);

  container
    .bind<CityService>(Component.CityService)
    .to(DefaultCityService)
    .inSingletonScope();

  container
    .bind<Controller>(Component.CityController)
    .to(CityController)
    .inSingletonScope();

  return container;
}
