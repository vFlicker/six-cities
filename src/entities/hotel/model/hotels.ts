import { createSelector, createSlice } from '@reduxjs/toolkit';

import { fetchAllHotels } from '~/shared/apiActions';
import { Hotel } from '~/shared/types/hotel';

import { hotelsAdapter } from './lib';
import {
  fetchAllHotelsFulfilled,
  fetchAllHotelsPending,
  fetchAllHotelsRejected,
} from './reducers';
import { State } from './types';

const initialState: State = {
  hotels: hotelsAdapter.getInitialState(),
  loading: false,
  error: null,
};

const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      /* FETCH ALL HOTELS */
      .addCase(fetchAllHotels.pending, fetchAllHotelsPending)
      .addCase(fetchAllHotels.fulfilled, fetchAllHotelsFulfilled)
      .addCase(fetchAllHotels.rejected, fetchAllHotelsRejected);
  },
});

// actions

export default hotelsSlice.reducer;

export const { selectAll: selectAllHotels } = hotelsAdapter.getSelectors(
  (state: RootState) => state.HOTELS.hotels,
);

export const selectFilteredHotels = createSelector(
  selectAllHotels,
  (state: RootState) => state.FILTERS,
  (hotels, filters): Hotel[] => {
    const { city } = filters;

    const filteredHotels = hotels.filter((hotel) => hotel.city.name === city);
    return filteredHotels;
  },
);
