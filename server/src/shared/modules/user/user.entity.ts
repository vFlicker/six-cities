import {
  defaultClasses,
  DocumentType,
  getModelForClass,
  modelOptions,
  prop,
  types,
} from '@typegoose/typegoose';

import { createSHA256 } from '#src/shared/helpers/hash.js';
import { User, UserType } from '#src/shared/types/index.js';

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
    minlength: [4, 'Min length for name is 3'],
    maxlength: [16, 'Max length for name is 15'],
  })
  public name!: string;

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
    default: '',
    maxlength: [255, 'Max length for avatar URL is 255'],
  })
  public avatarUrl!: string;

  @prop({
    required: true,
    minlength: [8, 'Min length for password is 8'],
    maxlength: [64, 'Max length for password is 32'],
  })
  public _password!: string;

  constructor(userData: User) {
    super();

    this.name = userData.name;
    this.email = userData.email;
    this.type = userData.type;
    this.avatarUrl = userData.avatarUrl;
  }

  public getPassword(): string {
    return this._password;
  }

  public setPassword(password: string, salt: string): void {
    this._password = createSHA256(password, salt);
  }
}

export const UserModel = getModelForClass(UserEntity);
