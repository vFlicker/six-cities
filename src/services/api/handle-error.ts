import { AxiosError } from 'axios';

import { ApiError } from './api-error';

export function handleError(error: unknown): never {
  const { response } = error as AxiosError<{ error: string }>;

  if (!response) throw error;

  throw new ApiError({
    message: response.data.error,
    status: response.status,
  });
}
