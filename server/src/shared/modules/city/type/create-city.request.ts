import { Request } from 'express';

import { RequestParams, ResponseBody } from '#src/rest/index.js';

import { CreateCityDto } from '../dto/create-city-dto.js';

export type CreateCityRequest = Request<
  RequestParams,
  ResponseBody,
  CreateCityDto
>;
