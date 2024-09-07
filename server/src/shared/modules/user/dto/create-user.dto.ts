import { UserType } from '#src/shared/types/user.type.js';

export class CreateUserDto {
  public name!: string;
  public email!: string;
  public password!: string;
  public type!: UserType;
  public avatarUrl?: string;
}
