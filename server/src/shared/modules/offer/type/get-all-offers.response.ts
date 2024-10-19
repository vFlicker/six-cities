import { Response } from 'express';

import { OfferRdo } from '../rdo/offer.rdo.js';

export type GetAllOffersResponse = Response<OfferRdo>;
