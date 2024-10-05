import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';

import { fillDTO } from '#src/shared/helpers/common.js';
import { Logger } from '#src/shared/libs/logger/index.js';
import { BaseController, HttpMethod } from '#src/shared/libs/rest/index.js';
import { Component } from '#src/shared/types/index.js';

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
      method: HttpMethod.Get,
      handler: this.showAll,
    });
  }

  public async showAll(_req: Request, res: Response): Promise<void> {
    const offers = await this.offerService.findAll();
    this.ok(res, fillDTO(OfferRdo, offers));
  }
}
