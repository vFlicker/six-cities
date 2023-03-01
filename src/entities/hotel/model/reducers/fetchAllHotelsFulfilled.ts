import { PayloadAction } from '@reduxjs/toolkit';

import { Hotel } from '~/shared/types/hotel';

import { hotelsAdapter } from '../../lib/hotelsAdapter';
import { HotelsState } from '../../types';

export const fetchAllHotelsFulfilled = (
  state: HotelsState,
  { payload }: PayloadAction<Hotel[]>,
): void => {
  hotelsAdapter.setMany(state.hotels, payload);
  state.loading = false;
  state.error = null;
};
