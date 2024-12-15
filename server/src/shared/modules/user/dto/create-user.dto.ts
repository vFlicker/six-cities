import { IsEmail, IsString, Length } from 'class-validator';

import { Match } from '#src/shared/libs/rest/index.js';

import { CreateUserMessages } from './create-user.messages.js';

export class CreateUserDto {
  @IsString({ message: CreateUserMessages.username.invalidFormat })
  @Length(2, 16, { message: CreateUserMessages.username.lengthField })
  public username!: string;

  @IsEmail({}, { message: CreateUserMessages.email.invalidFormat })
  public email!: string;

  @IsString({ message: CreateUserMessages.password.invalidFormat })
  @Length(8, 64, { message: CreateUserMessages.password.lengthField })
  public password!: string;

  @IsString({ message: CreateUserMessages.passwordConfirmation.invalidFormat })
  @Length(8, 64, {
    message: CreateUserMessages.passwordConfirmation.lengthField,
  })
  @Match(CreateUserDto, (dto) => dto.password)
  public passwordConfirmation!: string;
}
