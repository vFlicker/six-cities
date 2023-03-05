import { UserState } from '../../types';

export const checkAuthStatusPending = (state: UserState): void => {
  state.loading = true;
  state.error = null;
};
