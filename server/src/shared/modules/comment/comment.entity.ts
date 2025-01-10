import {
  defaultClasses,
  DocumentType,
  getModelForClass,
  modelOptions,
  prop,
  Ref,
  types,
} from '@typegoose/typegoose';

import { OfferEntity } from '#src/shared/modules/offer/index.js';
import { UserEntity } from '#src/shared/modules/user/index.js';

export type CommentDocument = DocumentType<CommentEntity>;
export type CommentModelType = types.ModelType<CommentEntity>;

@modelOptions({
  schemaOptions: {
    collection: 'comments',
  },
})
export class CommentEntity extends defaultClasses.TimeStamps {
  @prop({
    trim: true,
    required: true,
    maxlength: [1024, 'Max length for description is 1024'],
  })
  public text!: string;

  @prop({
    required: true,
    min: [1, 'Min rating is 1'],
    max: [5, 'Max rating is 5'],
  })
  public rating!: number;

  @prop({
    ref: OfferEntity,
    required: true,
  })
  public offerId!: Ref<OfferEntity>;

  @prop({
    ref: UserEntity,
    required: true,
  })
  public authorId!: Ref<UserEntity>;
}

export const CommentModel = getModelForClass(CommentEntity);
