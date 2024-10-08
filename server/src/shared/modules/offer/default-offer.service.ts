import { inject, injectable } from 'inversify';

import { Component } from '#src/shared/enums/index.js';
import { Logger } from '#src/shared/libs/logger/index.js';

import { CreateOfferDto } from './dto/create-offer.dto.js';
import { OfferDocument, OfferModelType } from './offer.entity.js';
import { OfferService } from './offer-service.interface.js';

@injectable()
export class DefaultOfferService implements OfferService {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.OfferModel) private readonly offerModel: OfferModelType,
  ) {}

  public async create(dto: CreateOfferDto): Promise<OfferDocument> {
    const createdOffer = await this.offerModel.create(dto);
    this.logger.info(`Offer with title ${dto.title} was created`);
    return createdOffer;
  }

  public async findAll(): Promise<OfferDocument[]> {
    return this.offerModel.find().populate(['hostId']).exec();
  }
}
