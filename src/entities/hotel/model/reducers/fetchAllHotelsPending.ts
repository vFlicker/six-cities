import { HotelsState } from '../../types';

export const fetchAllHotelsPending = (state: HotelsState): void => {
  state.loading = true;
  state.error = null;
};
