import { Request } from 'express';

import { RequestParams, ResponseBody } from '#src/shared/libs/rest/index.js';

export type CheckAuthenticateRequest = Request<
  RequestParams,
  ResponseBody,
  void
>;
