import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import ApiError from '../errors';

const BACKEND_URL = 'https://6.react.pages.academy/six-cities';
const TIMEOUT = 5000;
const WITH_CREDENTIALS = true;

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
    withCredentials: WITH_CREDENTIALS,
  });

  const onSuccess = (response: AxiosResponse) => response;

  const onFail = (err: AxiosError) => {
    const { status, data } = err.response as ErrorResponse;

    throw new ApiError({
      message: data.error,
      status,
    });
  };

  apiService.interceptors.response.use(onSuccess, onFail);

  return apiService;
};

export default createApiService;
