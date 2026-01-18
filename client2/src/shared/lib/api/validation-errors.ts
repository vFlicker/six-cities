import { ErrorDetail } from './api-types';

export const getFieldError = (
  field: string,
  details: ErrorDetail[],
): string | undefined => {
  const error = details.find((detail) => detail.field === field);
  return error?.messages.join(' ');
};
