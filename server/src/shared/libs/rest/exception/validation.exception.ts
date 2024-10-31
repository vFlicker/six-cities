import { StatusCodes } from 'http-status-codes';

import { HttpError } from '../errors/http-error.js';
import { ValidationErrorField } from '../types/validation-error-field.type.js';

export class ValidationException extends HttpError {
  public errors: ValidationErrorField[] = [];

  constructor(
    message: string,
    errors: ValidationErrorField[],
    context?: string,
  ) {
    super(StatusCodes.BAD_REQUEST, message, context);
    this.errors = errors;
  }
}
