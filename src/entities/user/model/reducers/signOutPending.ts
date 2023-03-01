import { UserState } from '../../types';

export const signOutPending = (state: UserState): void => {
  state.loading = true;
  state.error = null;
};
