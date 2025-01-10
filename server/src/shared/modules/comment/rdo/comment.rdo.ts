import { Expose, Type } from 'class-transformer';

import { ExposeId } from '#src/shared/helpers/index.js';
import { UserRdo } from '#src/shared/modules/user/index.js';

export class CommentRdo {
  @ExposeId({ name: '_id' })
  public id!: string;

  @Expose()
  public text!: string;

  @Expose({ name: 'authorId' })
  @Type(() => UserRdo)
  public author!: UserRdo;
}
