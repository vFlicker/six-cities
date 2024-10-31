import { StatusCodes } from 'http-status-codes';

import { BaseUserException } from './base-user.exception.js';

export class AuthenticationException extends BaseUserException {
  constructor(context?: string) {
    super(StatusCodes.UNAUTHORIZED, 'User authentication failed', context);
  }
}
