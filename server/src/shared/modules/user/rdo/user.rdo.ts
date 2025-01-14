import { Expose } from 'class-transformer';

import { ExposeId } from '#src/shared/helpers/index.js';

export class UserRdo {
  @ExposeId({ name: '_id' })
  public id!: string;

  @Expose()
  public username!: string;

  @Expose()
  public email!: string;

  @Expose()
  public type!: string;

  @Expose()
  public avatarUrl!: string;
}
