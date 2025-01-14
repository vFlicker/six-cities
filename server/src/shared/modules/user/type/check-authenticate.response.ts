import { Response } from 'express';

import { UserRdo } from '../rdo/user.rdo.js';

export type CheckAuthenticateResponse = Response<UserRdo>;
