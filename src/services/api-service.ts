import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import ApiError from '../errors';

const BACKEND_URL = 'https://8.react.pages.academy/six-cities';
const TIMEOUT = 5000;

type ErrorResponse = {
  status: number,
  data: {
    error: string,
  }
};

const createApiService = (): AxiosInstance => {
  const apiService = axios.create({
    baseURL: BACKEND_URL,
    timeout: TIMEOUT,
  });

  apiService.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = localStorage.getItem('token');

      if (token) {
        // eslint-disable-next-line no-param-reassign
        config.headers = { 'x-token': token };
      }

      return config;
    },
  );

  apiService.interceptors.response.use(
    (response: AxiosResponse) => response,

    (err: AxiosError) => {
      const { status, data } = err.response as ErrorResponse;

      throw new ApiError({
        message: data.error,
        status,
      });
    },
  );

  return apiService;
};

export default createApiService;
