import {
  IsEmail,
  IsEnum,
  IsString,
  IsUrl,
  Length,
  MaxLength,
} from 'class-validator';

import { UserType } from '#src/shared/types/user-type.enum.js';

import { CreateUserMessages } from './create-user.messages.js';

export class CreateUserDto {
  @IsString({ message: CreateUserMessages.name.invalidFormat })
  @Length(2, 16, { message: CreateUserMessages.name.lengthField })
  public name!: string;

  @IsEmail({}, { message: CreateUserMessages.email.invalidFormat })
  public email!: string;

  @IsString({ message: CreateUserMessages.password.invalidFormat })
  @Length(8, 64, { message: CreateUserMessages.password.lengthField })
  public password!: string;

  @IsEnum(UserType, { message: CreateUserMessages.type.invalid })
  public type!: UserType;

  @IsUrl({}, { message: CreateUserMessages.avatarUrl.invalidFormat })
  @MaxLength(255, { message: CreateUserMessages.avatarUrl.maxLength })
  public avatarUrl!: string;
}
