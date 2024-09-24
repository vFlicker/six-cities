import { Response } from 'express';

import { UserRdo } from '../rdo/user.rdo.js';

export type CreateUserResponse = Response<UserRdo>;
