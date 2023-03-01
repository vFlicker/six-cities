import { UserState } from '../../types';

export const loginPending = (state: UserState): void => {
  state.user = null;
  state.loading = true;
  state.error = null;
};
