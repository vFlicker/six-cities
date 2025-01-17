import { Response } from 'express';

import { OfferRdo } from '../rdo/offer.rdo.js';

export type GetNearbyOffersByIdResponse = Response<OfferRdo>;
