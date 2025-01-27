import axios from 'axios';

import { getToken } from '../libs/token';

const BACKEND_URL = 'http://localhost:8000/api';
const REQUEST_TIMEOUT = 5000;
const DEFAULT_ERROR_TEXT = 'Something went wrong. Please try again later.';

const createApi = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use((config) => {
    const token = getToken();

    if (token && config.headers) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (err) => {
      throw new Error(err.response?.data.message || DEFAULT_ERROR_TEXT);
    },
  );

  return api;
};

export const apiClient = createApi();
