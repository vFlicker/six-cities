import { Request } from 'express';

import { RequestParams, ResponseBody } from '#src/shared/libs/rest/index.js';

import { CreateCommentDto } from '../dto/create-comment.dto.js';

export type CreateCommentRequest = Request<
  RequestParams,
  ResponseBody,
  CreateCommentDto
>;
