import { UserState } from '../../types';

export const signOutFulfilled = (state: UserState): void => {
  state.authStatus = 'unauthenticated';
  state.user = null;
  state.loading = false;
  state.error = null;
};
