import axios from 'axios';
import { camelizeKeys } from 'humps';

import { EnvConfig } from '../config';

const TIMEOUT = 5000;

export const httpClient = axios.create({
  baseURL: EnvConfig.BASE_URL,
  timeout: TIMEOUT,
});

httpClient.interceptors.response.use((response) => {
  response.data = camelizeKeys(response.data);
  return response;
});
