import { State } from '../types';

export const fetchAllHotelsPending = (state: State): void => {
  state.loading = true;
  state.error = null;
};
