import axios, { AxiosRequestConfig } from 'axios';
import { camelizeKeys } from 'humps';

import { getToken } from '../token';

const BACKEND_URL = 'https://8.react.pages.academy/six-cities';
const TIMEOUT = 5000;

export const httpClient = axios.create({
  baseURL: BACKEND_URL,
  timeout: TIMEOUT,
});

httpClient.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = getToken();

  if (token && config.headers) {
    config.headers['x-token'] = token;
  }

  return config;
});

httpClient.interceptors.response.use((response) => {
  response.data = camelizeKeys(response.data);
  return response;
});
