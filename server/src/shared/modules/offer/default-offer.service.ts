import { inject, injectable } from 'inversify';

import { Component } from '#src/shared/types/index.js';

import { OfferDocument, OfferModelType } from './offer.entity.js';
import { OfferService } from './offer-service.interface.js';

@injectable()
export class DefaultOfferService implements OfferService {
  constructor(
    @inject(Component.OfferModel) private readonly offerModel: OfferModelType,
  ) {}

  public async findAll(): Promise<OfferDocument[]> {
    return this.offerModel.find();
  }
}
