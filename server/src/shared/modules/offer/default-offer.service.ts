import { StatusCodes } from 'http-status-codes';
import { inject, injectable } from 'inversify';

import { Component } from '#src/shared/enums/index.js';
import { Logger } from '#src/shared/libs/logger/index.js';
import { HttpError } from '#src/shared/libs/rest/index.js';
import { CityModelType } from '#src/shared/modules/city/index.js';

import { CreateOfferDto } from './dto/create-offer.dto.js';
import { OfferDocument, OfferModelType } from './offer.entity.js';
import { OfferService } from './offer-service.interface.js';

@injectable()
export class DefaultOfferService implements OfferService {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.OfferModel) private readonly offerModel: OfferModelType,
    @inject(Component.CityModel) private readonly cityModel: CityModelType,
  ) {}

  public async create(dto: CreateOfferDto): Promise<OfferDocument> {
    const foundCity = await this.cityModel.findOne({ name: dto.cityName });
    if (!foundCity) {
      throw new HttpError(
        StatusCodes.BAD_REQUEST,
        `City with name ${dto.cityName} not exists`,
        'DefaultOfferService',
      );
    }

    const offerData = { ...dto, cityId: foundCity._id };
    const createdOffer = await this.offerModel.create(offerData);
    this.logger.info(`Offer with title ${dto.title} was created`);

    return createdOffer;
  }

  public async findAll(): Promise<OfferDocument[]> {
    return this.offerModel.find().populate(['hostId', 'cityId']).exec();
  }
}
