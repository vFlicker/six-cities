import axios from 'axios';

import { EnvConfig } from '../config';

const TIMEOUT = 5000;

export const httpClient = axios.create({
  baseURL: EnvConfig.BASE_URL,
  timeout: TIMEOUT,
});
