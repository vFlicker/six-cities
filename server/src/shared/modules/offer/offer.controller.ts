import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';

import { fillDTO } from '#src/shared/helpers/common.js';
import { Logger } from '#src/shared/libs/logger/index.js';
import {
  BaseController,
  HttpMethod,
  ValidateDtoMiddleware,
} from '#src/shared/libs/rest/index.js';
import { Component } from '#src/shared/types/index.js';

import { CreateOfferDto } from './dto/create-offer.dto.js';
import { OfferService } from './offer-service.interface.js';
import { OfferRdo } from './rdo/offer.rdo.js';

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
      path: '/',
      method: HttpMethod.Get,
      handler: this.showAll,
    });
  }

  public async create(req: Request, res: Response): Promise<void> {
    const createdOffer = await this.offerService.create(req.body);
    const offerRdo = fillDTO(OfferRdo, createdOffer);
    this.created(res, offerRdo);
  }

  public async showAll(_req: Request, res: Response): Promise<void> {
    const foundOffers = await this.offerService.findAll();
    const offersRdo = fillDTO(OfferRdo, foundOffers);
    this.ok(res, offersRdo);
  }
}
