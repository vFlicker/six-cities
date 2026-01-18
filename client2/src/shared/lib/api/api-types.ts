export type ErrorDetail = {
  field: string;
  value: string;
  messages: string[];
};

export type ApiError = {
  type: string;
  message: string;
  details: ErrorDetail[];
};

export const isApiError = (value: unknown): value is ApiError => {
  if (!value || typeof value !== 'object') return false;

  const error = value as ApiError;
  return (
    typeof error.type === 'string' &&
    typeof error.message === 'string' &&
    Array.isArray(error.details)
  );
};
