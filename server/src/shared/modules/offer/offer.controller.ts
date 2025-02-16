import { StatusCodes } from 'http-status-codes';
import { inject, injectable } from 'inversify';

import { Component } from '#src/shared/enums/index.js';
import { fillDTO } from '#src/shared/helpers/common.js';
import { Logger } from '#src/shared/libs/logger/index.js';
import {
  BaseController,
  DocumentExistsMiddleware,
  HttpError,
  HttpMethod,
  PrivateRouteMiddleware,
  ValidateDtoMiddleware,
  ValidateObjectIdMiddleware,
} from '#src/shared/libs/rest/index.js';
import { CityService } from '#src/shared/modules/city/index.js';
import {
  CommentRdo,
  CommentService,
} from '#src/shared/modules/comment/index.js';

import { CreateOfferDto } from './dto/create-offer.dto.js';
import { DEFAULT_CITY_NAME } from './offer.constant.js';
import { OfferService } from './offer-service.interface.js';
import { OfferRdo } from './rdo/offer.rdo.js';
import { CreateOfferRequest } from './type/create-offer.request.js';
import { CreateOfferResponse } from './type/create-offer.response.js';
import { GetAllCommentsRequest } from './type/get-all-comments.request.js';
import { GetAllCommentsResponse } from './type/get-all-comments.response.js';
import { GetAllOffersByCityNameRequest } from './type/get-all-offers-by-city-name.request.js';
import { GetAllOffersByCityNameResponse } from './type/get-all-offers-by-city-name.response.js';
import { GetNearbyOffersByIdRequest } from './type/get-nearby-offers-by-id.request.js';
import { GetNearbyOffersByIdResponse } from './type/get-nearby-offers-by-id.response.js';
import { GetOfferByIdRequest } from './type/get-offer-by-id.request.js';
import { GetOfferByIdResponse } from './type/get-offer-by-id.response.js';

@injectable()
export class OfferController extends BaseController {
  constructor(
    @inject(Component.Logger) protected readonly logger: Logger,
    @inject(Component.OfferService) private readonly offerService: OfferService,
    @inject(Component.CityService) private readonly cityService: CityService,
    @inject(Component.CommentService)
    private readonly commentService: CommentService,
  ) {
    super(logger);

    this.logger.info('Register routes for OfferController');

    this.addRoute({
      path: '/',
      method: HttpMethod.Post,
      handler: this.create,
      middlewares: [
        new PrivateRouteMiddleware(),
        new ValidateDtoMiddleware(CreateOfferDto),
      ],
    });

    this.addRoute({
      path: '/',
      method: HttpMethod.Get,
      handler: this.getAllByCityName,
    });

    this.addRoute({
      path: '/:offerId',
      method: HttpMethod.Get,
      handler: this.getById,
      middlewares: [
        new ValidateObjectIdMiddleware('offerId'),
        new DocumentExistsMiddleware(this.offerService, 'Offer', 'offerId'),
      ],
    });

    this.addRoute({
      path: '/:offerId/nearby',
      method: HttpMethod.Get,
      handler: this.getNearbyOffersById,
      middlewares: [
        new ValidateObjectIdMiddleware('offerId'),
        new DocumentExistsMiddleware(this.offerService, 'Offer', 'offerId'),
      ],
    });

    this.addRoute({
      path: '/:offerId/comments',
      method: HttpMethod.Get,
      handler: this.getAllComments,
      middlewares: [
        new ValidateObjectIdMiddleware('offerId'),
        new DocumentExistsMiddleware(this.offerService, 'Offer', 'offerId'),
      ],
    });
  }

  public async create(
    req: CreateOfferRequest,
    res: CreateOfferResponse,
  ): Promise<void> {
    const { cityName } = req.body;

    const foundCity = await this.cityService.findByName(cityName);
    if (!foundCity) {
      throw new HttpError(
        StatusCodes.BAD_REQUEST,
        `City with name ${cityName} not exists`,
        'DefaultOfferService.create',
      );
    }

    const createdOffer = await this.offerService.create(foundCity.id, req.body);
    const offerRdo = fillDTO(OfferRdo, createdOffer);
    this.created(res, offerRdo);
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

  public async getById(
    req: GetOfferByIdRequest,
    res: GetOfferByIdResponse,
  ): Promise<void> {
    const offerId = req.params.offerId;
    const foundOffer = await this.offerService.findById(offerId);
    const offerRdo = fillDTO(OfferRdo, foundOffer);
    this.ok(res, offerRdo);
  }

  public async getNearbyOffersById(
    req: GetNearbyOffersByIdRequest,
    res: GetNearbyOffersByIdResponse,
  ): Promise<void> {
    const offerId = req.params.offerId;
    const nearbyOffers = await this.offerService.findNearbyById(offerId);
    const nearbyOffersRdo = fillDTO(OfferRdo, nearbyOffers);
    this.ok(res, nearbyOffersRdo);
  }

  public async getAllComments(
    req: GetAllCommentsRequest,
    res: GetAllCommentsResponse,
  ): Promise<void> {
    const offerId = req.params.offerId;
    const foundComments = await this.commentService.findAllByOfferId(offerId);
    const commentRdo = fillDTO(CommentRdo, foundComments);
    this.ok(res, commentRdo);
  }
}
