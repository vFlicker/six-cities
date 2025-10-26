import axios from 'axios';

import { HttpCode } from './httpCode';

export const isNotFoundError = (err: unknown): boolean => {
  return axios.isAxiosError(err) && err.response?.status === HttpCode.NOT_FOUND;
};

export const isBadRequestError = (err: unknown): boolean => {
  return (
    axios.isAxiosError(err) && err.response?.status === HttpCode.BAD_REQUEST
  );
};
