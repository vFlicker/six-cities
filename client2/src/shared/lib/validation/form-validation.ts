import { ZodError, ZodType } from 'zod';

import { ApiError } from '../api';

export const parseFormData = <T>(
  rawData: Record<string, FormDataEntryValue>,
  schema: ZodType<T>,
): T | ApiError => {
  const result = schema.safeParse(rawData);
  if (result.success) return result.data;
  return transformValidationError(result.error);
};

const transformValidationError = (error: ZodError): ApiError => {
  const fieldErrors = new Map<string, string[]>();

  for (const issue of error.issues) {
    const field = issue.path.join('.');
    const messages = fieldErrors.get(field) ?? [];
    messages.push(issue.message);
    fieldErrors.set(field, messages);
  }

  return {
    type: 'VALIDATION_ERROR',
    message: '',
    details: Array.from(fieldErrors, ([field, messages]) => ({
      field,
      value: '',
      messages,
    })),
  };
};
