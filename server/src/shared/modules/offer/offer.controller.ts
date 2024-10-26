import { Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import { inject, injectable } from 'inversify';

import { Component } from '#src/shared/enums/index.js';
import { fillDTO } from '#src/shared/helpers/common.js';
import { Logger } from '#src/shared/libs/logger/index.js';
import {
  BaseController,
  HttpError,
  HttpMethod,
  ValidateDtoMiddleware,
} from '#src/shared/libs/rest/index.js';

import { CreateOfferDto } from './dto/create-offer.dto.js';
import { OfferService } from './offer-service.interface.js';
import { OfferRdo } from './rdo/offer.rdo.js';
import { CreateOfferRequest } from './type/create-offer.request.js';
import { CreateOfferResponse } from './type/create-offer.response.js';
import { GetAllOffersResponse } from './type/get-all-offers.response.js';
import { GetOfferByIdRequest } from './type/get-offer-by-id.request.js';
import { GetOfferByIdResponse } from './type/get-offer-by-id.response.js';

@injectable()
export class OfferController extends BaseController {
  constructor(
    @inject(Component.Logger) protected readonly logger: Logger,
    @inject(Component.OfferService) private readonly offerService: OfferService,
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
    });

    this.addRoute({
      path: '/',
      method: HttpMethod.Get,
      handler: this.getAll,
    });
  }

  public async create(
    req: CreateOfferRequest,
    res: CreateOfferResponse,
  ): Promise<void> {
    const createdOffer = await this.offerService.create(req.body);
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

  public async getAll(_req: Request, res: GetAllOffersResponse): Promise<void> {
    const foundOffers = await this.offerService.findAll();
    const offersRdo = fillDTO(OfferRdo, foundOffers);
    this.ok(res, offersRdo);
  }
}
