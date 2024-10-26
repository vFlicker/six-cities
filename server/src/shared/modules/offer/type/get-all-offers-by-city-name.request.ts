import { Request } from 'express';

import { ResponseBody } from '#src/shared/libs/rest/index.js';

import { CityNameParam } from './city-name.param.js';

export type GetAllOffersByCityNameRequest = Request<
  CityNameParam,
  ResponseBody,
  unknown
>;
