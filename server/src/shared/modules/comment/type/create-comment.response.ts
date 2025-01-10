import { Response } from 'express';

import { CommentRdo } from '../rdo/comment.rdo.js';

export type CreateCommentResponse = Response<CommentRdo>;
