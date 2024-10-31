import { HttpError } from '../errors/http-error.js';

export class BaseUserException extends HttpError {
  constructor(httpStatusCode: number, message: string, context?: string) {
    super(httpStatusCode, message, context);
  }
}
