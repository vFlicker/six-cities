import axios, { AxiosError } from 'axios';

import { HttpCode } from './http-code';

export type ErrorDetail = {
  field: string;
  value: string;
  messages: string[];
};

export type ClientError = {
  type: string;
  message: string;
  details: ErrorDetail[];
};

export const getFieldError = (
  field: string,
  details: ErrorDetail[] | null,
): string | undefined => {
  const error = details?.find((detail) => detail.field === field);
  if (error) return error.messages.join(' ');
};

export const isClientError = (err: unknown): err is AxiosError<ClientError> => {
  return (
    axios.isAxiosError(err) &&
    !!err.response &&
    err.response.status >= HttpCode.BAD_REQUEST &&
    err.response.status < HttpCode.INTERNAL_SERVER_ERROR
  );
};

export const isNotFoundError = (err: unknown): err is AxiosError => {
  return axios.isAxiosError(err) && err.response?.status === HttpCode.NOT_FOUND;
};

export const isBadRequestError = (err: unknown): err is AxiosError => {
  return (
    axios.isAxiosError(err) && err.response?.status === HttpCode.BAD_REQUEST
  );
};
