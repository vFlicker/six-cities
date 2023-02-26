import { State } from '../types';

export const signOutPending = (state: State): void => {
  state.loading = true;
  state.error = null;
};
