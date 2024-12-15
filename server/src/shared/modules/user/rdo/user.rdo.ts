import { Expose } from 'class-transformer';

export class UserRdo {
  @Expose()
  public username!: string;

  @Expose()
  public email!: string;

  @Expose()
  public type!: string;

  @Expose()
  public avatarUrl!: string;
}
