import { inject, injectable } from 'inversify';

import { Component } from '#src/shared/enums/index.js';
import { Logger } from '#src/shared/libs/logger/index.js';

import { CreateOfferDto } from './dto/create-offer.dto.js';
import { DEFAULT_OFFER_COUNT } from './offer.constant.js';
import { OfferDocument, OfferModelType } from './offer.entity.js';
import { OfferService } from './offer-service.interface.js';

@injectable()
export class DefaultOfferService implements OfferService {
  // TODO: add sort and limit

  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.OfferModel) private readonly offerModel: OfferModelType,
  ) {}

  public async create(
    cityId: string,
    dto: CreateOfferDto,
  ): Promise<OfferDocument> {
    const offerData = { cityId, ...dto };
    const createdOffer = await this.offerModel.create(offerData);
    this.logger.info(`Offer with title ${dto.title} was created`);

    return createdOffer;
  }

  public async findById(id: string): Promise<OfferDocument | null> {
    return this.offerModel.findById(id).populate(['hostId', 'cityId']).exec();
  }

  public async findAll(): Promise<OfferDocument[]> {
    return this.offerModel.find().populate(['hostId', 'cityId']).exec();
  }

  public async findAllByCityId(
    id: string,
    count?: number,
  ): Promise<OfferDocument[]> {
    const limit = count ?? DEFAULT_OFFER_COUNT;
    return this.offerModel
      .find({ cityId: id }, {}, { limit })
      .populate(['hostId', 'cityId'])
      .exec();
  }
}
