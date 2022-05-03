import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

import { ApiError } from './api-error';
import { getToken } from './token';

const BACKEND_URL = 'https://8.react.pages.academy/six-cities';
const TIMEOUT = 5000;

const HttpCode = {
  UNAUTHORIZED: 401,
};

type ErrorResponse = {
  status: number,
  data: {
    error: string,
  }
};

type UnauthorizedCallback = () => void;

export const createApiService = (onUnauthorized: UnauthorizedCallback): AxiosInstance => {
  const apiService = axios.create({
    baseURL: BACKEND_URL,
    timeout: TIMEOUT,
  });

  apiService.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token) {
        // eslint-disable-next-line no-param-reassign
        config.headers = { 'x-token': token };
      }

      return config;
    },
  );

  apiService.interceptors.response.use(
    (response: AxiosResponse) => response,

    (error: AxiosError) => {
      const { status, data } = error.response as ErrorResponse;

      if (status === HttpCode.UNAUTHORIZED) {
        onUnauthorized();
      }

      throw new ApiError({
        message: data.error,
        status,
      });
    },
  );

  return apiService;
};
