import { AxiosInstance } from 'axios';

import { ApiError } from '@/services';

import { AppDispatch } from '..';

export type AsyncThunkOptions = {
  dispatch: AppDispatch;
  extra: AxiosInstance;
  rejectValue: ApiError;
}

export type AuthData = {
  email: string;
  password: string;
};
