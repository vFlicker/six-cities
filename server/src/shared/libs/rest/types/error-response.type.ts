import { ValidationErrorField } from './validation-error-field.type.js';

export type ErrorResponse = {
  type: string;
  message: string;
  details: ValidationErrorField[];
};
