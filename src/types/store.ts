import { AxiosInstance } from 'axios';

import { rootReducer, store } from '~/store';

import { Error } from './error';

export type State = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export type ThunkOptions = {
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance;
  rejectValue: Error;
};
