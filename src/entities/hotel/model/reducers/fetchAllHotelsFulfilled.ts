import { PayloadAction } from '@reduxjs/toolkit';

import { Hotel } from '~/shared/types/hotel';

import { hotelsAdapter } from '../helpers';
import { State } from '../types';

export const fetchAllHotelsFulfilled = (
  state: State,
  { payload }: PayloadAction<Hotel[]>,
): void => {
  hotelsAdapter.setMany(state.hotels, payload);
  state.loading = false;
  state.error = null;
};
