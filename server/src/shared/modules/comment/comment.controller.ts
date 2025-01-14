import { StatusCodes } from 'http-status-codes';
import { inject, injectable } from 'inversify';
import { Logger } from 'pino';

import { Component } from '#src/shared/enums/index.js';
import { fillDTO } from '#src/shared/helpers/index.js';
import {
  BaseController,
  HttpError,
  HttpMethod,
  PrivateRouteMiddleware,
  ValidateDtoMiddleware,
} from '#src/shared/libs/rest/index.js';
import { OfferService } from '#src/shared/modules/offer/index.js';
import { UserService } from '#src/shared/modules/user/index.js';

import { CommentService } from './comment-service.interface.js';
import { CreateCommentDto } from './dto/create-comment.dto.js';
import { CommentRdo } from './rdo/comment.rdo.js';
import { CreateCommentRequest } from './type/create-comment.request.js';
import { CreateCommentResponse } from './type/create-comment.response.js';

@injectable()
export class CommentController extends BaseController {
  constructor(
    @inject(Component.Logger) protected readonly logger: Logger,
    @inject(Component.CommentService)
    private readonly commentService: CommentService,
    @inject(Component.OfferService) private readonly offerService: OfferService,
    @inject(Component.UserService) private readonly userService: UserService,
  ) {
    super(logger);

    this.logger.info('Register routes for CommentController');

    this.addRoute({
      path: '/',
      method: HttpMethod.Post,
      handler: this.create,
      middlewares: [
        new PrivateRouteMiddleware(),
        new ValidateDtoMiddleware(CreateCommentDto),
      ],
    });
  }

  public async create(
    req: CreateCommentRequest,
    res: CreateCommentResponse,
  ): Promise<void> {
    const { offerId, authorId } = req.body;

    const foundOffer = await this.offerService.findById(offerId);
    if (!foundOffer) {
      throw new HttpError(
        StatusCodes.NOT_FOUND,
        `Offer with id ${offerId} not found`,
        'CommentController.create',
      );
    }

    const foundAuthor = await this.userService.findById(authorId);
    if (!foundAuthor) {
      throw new HttpError(
        StatusCodes.NOT_FOUND,
        `User with id ${authorId} not found`,
        'CommentController.create',
      );
    }

    const createdComment = await this.commentService.create(req.body);
    const commentRdo = fillDTO(CommentRdo, createdComment);
    this.created(res, commentRdo);
  }
}
