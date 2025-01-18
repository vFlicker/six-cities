import { inject, injectable } from 'inversify';

import { Component } from '#src/shared/enums/index.js';
import { Logger } from '#src/shared/libs/logger/index.js';

import { CreateOfferDto } from './dto/create-offer.dto.js';
import {
  DEFAULT_NEARBY_OFFER_COUNT,
  DEFAULT_OFFER_COUNT,
} from './offer.constant.js';
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

  public async findNearbyById(id: string): Promise<OfferDocument[]> {
    const offer = await this.offerModel.findById(id).exec();
    const { _id: currentOfferId, cityId, location } = offer!;

    return this.offerModel
      .find({
        cityId,
        _id: { $ne: currentOfferId },
        location: {
          $near: {
            $geometry: {
              type: 'Point',
              coordinates: location.coordinates,
            },
            $maxDistance: 1000,
          },
        },
      })
      .populate(['hostId', 'cityId'])
      .limit(DEFAULT_NEARBY_OFFER_COUNT)
      .exec();
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

  public async exists(id: string): Promise<boolean> {
    const isExist = await this.offerModel.exists({ _id: id });
    return isExist !== null;
  }
}
