import { ValidationError } from 'class-validator';

import { ApplicationError } from './enums/application-error.enum.js';
import { ErrorResponse } from './types/error-response.type.js';
import { ValidationErrorField } from './types/validation-error-field.type.js';

export function reduceValidationErrors(
  errors: ValidationError[],
): ValidationErrorField[] {
  return errors.map(({ property, constraints, value }) => ({
    field: property,
    value,
    messages: constraints ? Object.values(constraints) : [],
  }));
}

export function createErrorResponse(
  type: ApplicationError,
  message: string,
  details: ValidationErrorField[] = [],
): ErrorResponse {
  return { type, message, details };
}

export function createErrorLog(
  httpStatusCode: number,
  message: string,
  context?: string,
): string {
  let errorMessage = `${httpStatusCode} — ${message}`;
  if (context) errorMessage = `[${context}]: ${errorMessage}`;
  return errorMessage;
}
