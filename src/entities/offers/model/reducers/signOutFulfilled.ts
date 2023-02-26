import { State } from '../types';

export const signOutFulfilled = (state: State): void => {
  state.authStatus = 'unauthenticated';
  state.user = null;
  state.loading = false;
  state.error = null;
};
