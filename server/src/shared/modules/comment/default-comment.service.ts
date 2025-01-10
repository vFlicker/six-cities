import { inject, injectable } from 'inversify';

import { Component } from '#src/shared/enums/index.js';
import { Logger } from '#src/shared/libs/logger/index.js';

import { CommentDocument, CommentModelType } from './comment.entity.js';
import { CommentService } from './comment-service.interface.js';
import { CreateCommentDto } from './dto/create-comment.dto.js';

@injectable()
export class DefaultCommentService implements CommentService {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.CommentModel)
    private readonly commentModel: CommentModelType,
  ) {}

  public async create(dto: CreateCommentDto): Promise<CommentDocument> {
    const createdComment = await this.commentModel.create(dto);
    this.logger.info(`Comment with text ${dto.text} was created`);

    return createdComment;
  }

  public async findAllByOfferId(id: string): Promise<CommentDocument[]> {
    return this.commentModel.find({ offerId: id }).exec();
  }
}
