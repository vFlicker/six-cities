import axios from 'axios';

const BACKEND_URL = 'http://localhost:8000/api';
const REQUEST_TIMEOUT = 5000;

const createApi = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  return api;
};

export const apiClient = createApi();
