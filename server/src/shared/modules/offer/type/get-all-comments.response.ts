import { Response } from 'express';

import { CommentRdo } from '#src/shared/modules/comment/index.js';

export type GetAllCommentsResponse = Response<CommentRdo>;
