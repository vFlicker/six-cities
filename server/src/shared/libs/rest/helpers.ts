import { ValidationError } from 'class-validator';

import { ApplicationError } from './enums/application-error.enum.js';
import { ErrorResponse } from './types/error-response.type.js';
import { ValidationErrorField } from './types/validation-error-field.type.js';

export function reduceValidationErrors(
  errors: ValidationError[],
): ValidationErrorField[] {
  const flattenErrors = (
    errors: ValidationError[],
    parentField = '',
  ): ValidationErrorField[] => {
    return errors.flatMap(({ property, constraints, value, children }) => {
      const fieldName = parentField ? `${parentField}.${property}` : property;
      const currentError = constraints
        ? [{ field: fieldName, value, messages: Object.values(constraints) }]
        : [];
      const childErrors = children?.length
        ? flattenErrors(children, fieldName)
        : [];

      return [...currentError, ...childErrors];
    });
  };

  return flattenErrors(errors);
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
