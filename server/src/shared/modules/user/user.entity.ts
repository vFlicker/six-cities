import {
  defaultClasses,
  DocumentType,
  getModelForClass,
  modelOptions,
  prop,
  types,
} from '@typegoose/typegoose';

import { UserType } from '#src/shared/enums/user-type.enum.js';
import { createSHA256 } from '#src/shared/helpers/hash.js';

import { User } from './type/user.type.js';

export type UserDocument = DocumentType<UserEntity>;
export type UserModelType = types.ModelType<UserEntity>;

@modelOptions({
  schemaOptions: {
    collection: 'users',
  },
})
export class UserEntity extends defaultClasses.TimeStamps {
  @prop({
    required: true,
    minlength: [2, 'Min length for username is 2'],
    maxlength: [16, 'Max length for username is 16'],
  })
  public username!: string;

  @prop({
    required: true,
    unique: true,
    match: [/^([\w-\\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Email is incorrect'],
  })
  public email!: string;

  @prop({
    type: () => String,
    required: true,
    enum: Object.values(UserType),
    default: UserType.Regular,
  })
  public type!: UserType;

  @prop({
    required: true,
    // TODO: remove hardcoded default avatar URL
    default: 'http://localhost:8000/uploads/default-avatar.jpg',
    maxlength: [255, 'Max length for avatar URL is 255'],
  })
  public avatarUrl!: string;

  @prop({
    required: true,
    minlength: [8, 'Min length for password is 8'],
    maxlength: [64, 'Max length for password is 64'],
  })
  public _password!: string;

  constructor(userData: User) {
    super();

    this.username = userData.username;
    this.email = userData.email;
  }

  public getPassword(): string {
    return this._password;
  }

  public setPassword(password: string, salt: string): void {
    this._password = createSHA256(password, salt);
  }

  public verifyPassword(password: string, salt: string): boolean {
    return this._password === createSHA256(password, salt);
  }
}

export const UserModel = getModelForClass(UserEntity);
