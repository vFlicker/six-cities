import axios from 'axios';

import { ApiError, ErrorDetail } from './api-types';
import { HttpCode } from './http-code';

export const getFieldError = (
  field: string,
  details: ErrorDetail[],
): string | undefined => {
  const error = details.find((detail) => detail.field === field);
  return error?.messages.join(' ');
};

export const parseError = (err: unknown): ApiError => {
  if (axios.isAxiosError<ApiError>(err) && err.response) {
    const { status, data } = err.response;

    if (
      status >= HttpCode.BAD_REQUEST &&
      status < HttpCode.INTERNAL_SERVER_ERROR
    ) {
      return {
        type: data.type ?? 'CLIENT_ERROR',
        message: data.message ?? 'Request failed',
        details: data.details ?? [],
      };
    }
  }

  throw err;
};
