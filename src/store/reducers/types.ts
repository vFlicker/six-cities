import { AxiosInstance } from 'axios';

import { ErrorType } from '@/types';

import { store } from '../store';

type AppDispatch = typeof store.dispatch;

export type AsyncThunkOptions = {
  dispatch: AppDispatch;
  extra: AxiosInstance;
  rejectValue: ErrorType;
};
