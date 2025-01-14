import { Request } from 'express';

import { ResponseBody } from '#src/shared/libs/rest/index.js';

import { OfferIdParam } from './offer-id.param.js';

export type GetAllCommentsRequest = Request<
  OfferIdParam,
  ResponseBody,
  unknown
>;
