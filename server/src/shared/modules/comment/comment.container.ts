import { Container } from 'inversify';

import { Component } from '#src/shared/enums/index.js';
import { Controller } from '#src/shared/libs/rest/index.js';

import { CommentController } from './comment.controller.js';
import { CommentModel, CommentModelType } from './comment.entity.js';
import { CommentService } from './comment-service.interface.js';
import { DefaultCommentService } from './default-comment.service.js';

export function createCommentContainer(): Container {
  const container = new Container();

  container
    .bind<CommentModelType>(Component.CommentModel)
    .toConstantValue(CommentModel);

  container
    .bind<CommentService>(Component.CommentService)
    .to(DefaultCommentService)
    .inSingletonScope();

  container
    .bind<Controller>(Component.CommentController)
    .to(CommentController)
    .inSingletonScope();

  return container;
}
