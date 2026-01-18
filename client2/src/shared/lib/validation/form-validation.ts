import { ZodError, ZodSchema } from 'zod';

import { ErrorDetail } from '../api';

export type FormValidationResult<T> =
  | { success: true; data: T }
  | { success: false; errors: ErrorDetail[] };

export const parseFormData = <T>(
  rawData: Record<string, FormDataEntryValue>,
  schema: ZodSchema<T>,
): FormValidationResult<T> => {
  const result = schema.safeParse(rawData);

  if (result.success) return { success: true, data: result.data };
  return { success: false, errors: formatZodErrors(result.error) };
};

export const formatZodErrors = (error: ZodError): ErrorDetail[] => {
  const fieldErrors = new Map<string, ErrorDetail>();

  for (const issue of error.issues) {
    const field = issue.path.join('.');
    const existing = fieldErrors.get(field);

    if (existing) {
      existing.messages.push(issue.message);
    } else {
      fieldErrors.set(field, {
        field,
        value: '',
        messages: [issue.message],
      });
    }
  }

  return Array.from(fieldErrors.values());
};
