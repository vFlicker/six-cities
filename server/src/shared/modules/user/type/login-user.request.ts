import { Request } from 'express';

import { RequestParams, ResponseBody } from '#src/shared/libs/rest/index.js';

import { LoginUserDto } from '../dto/login-user.dto.js';

export type LoginUserRequest = Request<
  RequestParams,
  ResponseBody,
  LoginUserDto
>;
