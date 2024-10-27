import { Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import { inject, injectable } from 'inversify';

import { Component } from '#src/shared/enums/index.js';
import { fillDTO } from '#src/shared/helpers/index.js';
import { Logger } from '#src/shared/libs/logger/index.js';
import {
  BaseController,
  HttpError,
  HttpMethod,
  ValidateDtoMiddleware,
} from '#src/shared/libs/rest/index.js';

import { CityService } from './city-service.interface.js';
import { CreateCityDto } from './dto/create-city-dto.js';
import { CityRdo } from './rdo/city.rdo.js';
import { CreateCityRequest } from './type/create-city.request.js';
import { CreateCityResponse } from './type/create-city.response.js';
import { GetAllCitiesResponse } from './type/get-all-cities.response.js';

@injectable()
export class CityController extends BaseController {
  constructor(
    @inject(Component.Logger) protected readonly logger: Logger,
    @inject(Component.CityService) private readonly cityService: CityService,
  ) {
    super(logger);

    this.logger.info('Register routes for CityController');

    this.addRoute({
      path: '/',
      method: HttpMethod.Post,
      handler: this.create,
      middlewares: [new ValidateDtoMiddleware(CreateCityDto)],
    });

    this.addRoute({
      path: '/',
      method: HttpMethod.Get,
      handler: this.getAll,
    });
  }

  public async create({ body }: CreateCityRequest, res: CreateCityResponse) {
    const foundCategory = await this.cityService.findByName(body.name);
    if (foundCategory) {
      throw new HttpError(
        StatusCodes.UNPROCESSABLE_ENTITY,
        `City with name ${body.name} already exists`,
        'CityController.create',
      );
    }

    const city = await this.cityService.create(body);
    const cityRdo = fillDTO(CityRdo, city);
    this.ok(res, cityRdo);
  }

  public async getAll(_req: Request, res: GetAllCitiesResponse) {
    const foundCities = await this.cityService.findAll();
    const cityRdo = fillDTO(CityRdo, foundCities);
    this.ok(res, cityRdo);
  }
}
