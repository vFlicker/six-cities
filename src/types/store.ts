import { ApiError } from '~/services';
import { rootReducer, store } from '~/store';

export type State = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export type ThunkOptions = {
  state: State;
  dispatch: AppDispatch;
  rejectValue: ApiError;
};
