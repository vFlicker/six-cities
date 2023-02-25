import { State } from '../types';

export const loginPending = (state: State): void => {
  state.user = null;
  state.loading = true;
  state.error = null;
};
