import { Request } from 'express';

import {
  RequestParams,
  RequestQuery,
  ResponseBody,
} from '#src/shared/libs/rest/index.js';

import { CityNameQuery } from './city-name.query.js';

export type GetAllOffersByCityNameRequest = Request<
  RequestParams,
  ResponseBody,
  unknown,
  RequestQuery & CityNameQuery
>;
