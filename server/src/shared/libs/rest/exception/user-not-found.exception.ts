import { StatusCodes } from 'http-status-codes';

import { BaseUserException } from './base-user.exception.js';

// TODO: use or remove it
export class UserNotFoundException extends BaseUserException {
  constructor(context?: string) {
    super(StatusCodes.NOT_FOUND, 'User not found', context);
  }
}
