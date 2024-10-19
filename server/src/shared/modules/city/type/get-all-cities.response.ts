import { Response } from 'express';

import { CityRdo } from '../rdo/city.rdo.js';

export type GetAllCitiesResponse = Response<CityRdo>;
