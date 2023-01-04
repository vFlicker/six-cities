import { rootReducer, store } from '~/store';

export type Error = {
  message: string;
  statusCode: number;
};

export type State = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export type ThunkOptions = {
  state: State;
  dispatch: AppDispatch;
  rejectValue: Error;
};
