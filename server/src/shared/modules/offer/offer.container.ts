import { Container } from 'inversify';

import { Component } from '#src/shared/enums/index.js';
import { Controller } from '#src/shared/libs/rest/index.js';

import { DefaultOfferService } from './default-offer.service.js';
import { OfferController } from './offer.controller.js';
import { OfferModel, OfferModelType } from './offer.entity.js';
import { OfferService } from './offer-service.interface.js';

export function createOfferContainer(): Container {
  const container = new Container();

  container
    .bind<OfferModelType>(Component.OfferModel)
    .toConstantValue(OfferModel);

  container
    .bind<OfferService>(Component.OfferService)
    .to(DefaultOfferService)
    .inSingletonScope();

  container
    .bind<Controller>(Component.OfferController)
    .to(OfferController)
    .inSingletonScope();

  return container;
}
