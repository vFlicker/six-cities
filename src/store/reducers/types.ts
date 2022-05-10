import { AxiosInstance } from 'axios';

import { ApiError } from '@/services';

import { store } from '../store';

type AppDispatch = typeof store.dispatch;

export type AsyncThunkOptions = {
  dispatch: AppDispatch;
  extra: AxiosInstance;
  rejectValue: ApiError;
}
