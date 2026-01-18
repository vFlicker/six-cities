import { Either, left, right } from '@sweet-monads/either';
import axios, { AxiosRequestConfig } from 'axios';

import { ApiError } from './api-types';
import { HttpCode } from './http-code';

// TODO: move BACKEND_URL to env variable
const BACKEND_URL = 'http://localhost:8000/api';
const REQUEST_TIMEOUT = 5000;

const axiosInstance = axios.create({
  baseURL: BACKEND_URL,
  timeout: REQUEST_TIMEOUT,
});

const parseError = (err: unknown): ApiError => {
  if (axios.isAxiosError<ApiError>(err) && err.response) {
    const { status, data } = err.response;

    if (
      status >= HttpCode.BAD_REQUEST &&
      status < HttpCode.INTERNAL_SERVER_ERROR
    ) {
      return {
        type: data.type,
        message: data.message,
        details: data.details,
      };
    }
  }

  throw err;
};

export const apiClient = {
  async get<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<Either<ApiError, T>> {
    try {
      const { data } = await axiosInstance.get<T>(url, config);
      return right(data);
    } catch (err) {
      return left(parseError(err));
    }
  },

  async post<T>(
    url: string,
    body?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<Either<ApiError, T>> {
    try {
      const { data } = await axiosInstance.post<T>(url, body, config);
      return right(data);
    } catch (err) {
      return left(parseError(err));
    }
  },

  async put<T>(
    url: string,
    body?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<Either<ApiError, T>> {
    try {
      const { data } = await axiosInstance.put<T>(url, body, config);
      return right(data);
    } catch (err) {
      return left(parseError(err));
    }
  },

  async delete<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<Either<ApiError, T>> {
    try {
      const { data } = await axiosInstance.delete<T>(url, config);
      return right(data);
    } catch (err) {
      return left(parseError(err));
    }
  },
};
