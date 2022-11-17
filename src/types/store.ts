import { AxiosInstance } from 'axios';

import { rootReducer, store } from '~/store';

import { Error } from './error';

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export type AsyncThunkOptions = {
  dispatch: AppDispatch;
  extra: AxiosInstance;
  rejectValue: Error;
};
