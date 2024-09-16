import { IsEmail, IsEnum, IsOptional, IsString, Length } from 'class-validator';

import { UserType } from '#src/shared/types/user.type.js';

import { CreateUserMessages } from './create-user.messages.js';

export class CreateUserDto {
  @IsString({ message: CreateUserMessages.name.invalidFormat })
  @Length(2, 15, { message: CreateUserMessages.name.lengthField })
  public name!: string;

  @IsEmail({}, { message: CreateUserMessages.email.invalidFormat })
  public email!: string;

  @IsString({ message: CreateUserMessages.password.invalidFormat })
  @Length(8, 20, { message: CreateUserMessages.password.lengthField })
  public password!: string;

  @IsEnum(UserType, { message: CreateUserMessages.type.invalid })
  public type!: UserType;

  @IsString({ message: CreateUserMessages.avatarUrl.invalidFormat })
  @IsOptional()
  public avatarUrl!: string;
}
