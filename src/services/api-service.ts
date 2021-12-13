import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import ApiError from '../errors';
import { getToken } from './token';

const BACKEND_URL = 'https://8.react.pages.academy/six-cities';
const TIMEOUT = 5000;

enum HttpCode {
  Unauthorized = 401,
}

type ErrorResponse = {
  status: number,
  data: {
    error: string,
  }
};

type UnauthorizedCallback = () => void;

const createApiService = (onUnauthorized: UnauthorizedCallback): AxiosInstance => {
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

      if (status === HttpCode.Unauthorized) {
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

export default createApiService;
