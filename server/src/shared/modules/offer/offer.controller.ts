import { StatusCodes } from 'http-status-codes';
import { inject, injectable } from 'inversify';

import { Component } from '#src/shared/enums/index.js';
import { fillDTO } from '#src/shared/helpers/common.js';
import { Logger } from '#src/shared/libs/logger/index.js';
import {
  BaseController,
  HttpError,
  HttpMethod,
  PrivateRouteMiddleware,
  ValidateDtoMiddleware,
  ValidateObjectIdMiddleware,
} from '#src/shared/libs/rest/index.js';
import { CityService } from '#src/shared/modules/city/index.js';

import { CreateOfferDto } from './dto/create-offer.dto.js';
import { DEFAULT_CITY_NAME } from './offer.constant.js';
import { OfferService } from './offer-service.interface.js';
import { OfferRdo } from './rdo/offer.rdo.js';
import { CreateOfferRequest } from './type/create-offer.request.js';
import { CreateOfferResponse } from './type/create-offer.response.js';
import { GetAllOffersByCityNameRequest } from './type/get-all-offers-by-city-name.request.js';
import { GetAllOffersByCityNameResponse } from './type/get-all-offers-by-city-name.response.js';
import { GetOfferByIdRequest } from './type/get-offer-by-id.request.js';
import { GetOfferByIdResponse } from './type/get-offer-by-id.response.js';

@injectable()
export class OfferController extends BaseController {
  constructor(
    @inject(Component.Logger) protected readonly logger: Logger,
    @inject(Component.OfferService) private readonly offerService: OfferService,
    @inject(Component.CityService) private readonly cityService: CityService,
  ) {
    super(logger);

    this.logger.info('Register routes for OfferController');

    this.addRoute({
      path: '/',
      method: HttpMethod.Post,
      handler: this.create,
      middlewares: [new ValidateDtoMiddleware(CreateOfferDto)],
    });

    this.addRoute({
      path: '/:offerId',
      method: HttpMethod.Get,
      handler: this.getById,
      middlewares: [
        new PrivateRouteMiddleware(),
        new ValidateObjectIdMiddleware('offerId'),
      ],
    });

    this.addRoute({
      path: '/',
      method: HttpMethod.Get,
      handler: this.getAllByCityName,
    });
  }

  public async create(
    req: CreateOfferRequest,
    res: CreateOfferResponse,
  ): Promise<void> {
    const foundCity = await this.cityService.findByName(req.body.cityName);
    if (!foundCity) {
      throw new HttpError(
        StatusCodes.BAD_REQUEST,
        `City with name ${req.body.cityName} not exists`,
        'DefaultOfferService.create',
      );
    }

    const createdOffer = await this.offerService.create(foundCity.id, req.body);
    const offerRdo = fillDTO(OfferRdo, createdOffer);
    this.created(res, offerRdo);
  }

  public async getById(
    req: GetOfferByIdRequest,
    res: GetOfferByIdResponse,
  ): Promise<void> {
    const offerId = req.params.offerId;

    const foundOffer = await this.offerService.findById(offerId);
    if (!foundOffer) {
      throw new HttpError(
        StatusCodes.NOT_FOUND,
        `Offer with id ${offerId} not found`,
        'OfferController.getById',
      );
    }

    const offerRdo = fillDTO(OfferRdo, foundOffer);
    this.ok(res, offerRdo);
  }

  public async getAllByCityName(
    req: GetAllOffersByCityNameRequest,
    res: GetAllOffersByCityNameResponse,
  ): Promise<void> {
    const { cityName = DEFAULT_CITY_NAME, limit } = req.query;

    const foundCity = await this.cityService.findByName(cityName);
    if (!foundCity) {
      throw new HttpError(
        StatusCodes.BAD_REQUEST,
        `City with name ${cityName} not exists`,
        'DefaultOfferService.create',
      );
    }

    const cityId = foundCity.id;
    const foundOffers = await this.offerService.findAllByCityId(cityId, limit);
    const offersRdo = fillDTO(OfferRdo, foundOffers);
    this.ok(res, offersRdo);
  }
}
