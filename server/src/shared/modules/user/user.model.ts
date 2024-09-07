import { getModelForClass, prop } from '@typegoose/typegoose';
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses.js';

import { User as BaseUser, UserType } from '#src/shared/types/index.js';

export class User extends TimeStamps implements BaseUser {
  @prop({
    type: String,
    minlength: [2, 'Min length for name is 2'],
    required: true,
  })
  public name!: string;

  @prop({
    type: String,
    unique: true,
    match: [/^([\w-\\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Email is incorrect'],
    required: true,
  })
  public email!: string;

  @prop({
    type: String,
    enum: Object.values(UserType),
    default: UserType.Regular,
    required: true,
  })
  public type!: UserType;

  @prop({
    type: String,
    minlength: [5, 'Min length for avatar url is 5'],
    required: true,
  })
  public avatarUrl!: string;
}

export const UserModel = getModelForClass(User);
