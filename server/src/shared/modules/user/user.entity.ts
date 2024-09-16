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
export class UserEntity extends defaultClasses.TimeStamps implements User {
  @prop({
    type: String,
    required: true,
    minlength: [2, 'Min length for name is 2'],
  })
  public name!: string;

  @prop({
    type: String,
    required: true,
    unique: true,
    match: [/^([\w-\\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Email is incorrect'],
  })
  public email!: string;

  @prop({
    type: String,
    required: true,
    enum: Object.values(UserType),
    default: UserType.Regular,
  })
  public type!: UserType;

  @prop({
    type: String,
    default: '',
  })
  public avatarUrl!: string;

  @prop({
    type: String,
    required: true,
    minlength: [8, 'Min length for password is 8'],
  })
  private password!: string;

  constructor(userData: User) {
    super();

    this.name = userData.name;
    this.email = userData.email;
    this.type = userData.type;
    this.avatarUrl = userData.avatarUrl;
  }

  public getPassword(): string {
    return this.password;
  }

  public setPassword(password: string, salt: string): void {
    this.password = createSHA256(password, salt);
  }
}

export const UserModel = getModelForClass(UserEntity);
