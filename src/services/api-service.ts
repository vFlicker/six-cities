import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { getToken } from './token';

const BACKEND_URL = 'https://8.react.pages.academy/six-cities';
const TIMEOUT = 5000;

export const createApiService = (): AxiosInstance => {
  const apiService = axios.create({
    baseURL: BACKEND_URL,
    timeout: TIMEOUT,
  });

  apiService.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = getToken();

    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers = { 'x-token': token };
    }

    return config;
  });

  return apiService;
};
