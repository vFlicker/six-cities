import { createSelector, createSlice } from '@reduxjs/toolkit';

import { fetchAllHotels } from '~/shared/apiActions';
import { Hotel } from '~/shared/types/hotel';

import { hotelsAdapter } from './lib';
import {
  changeCityFilterReducer,
  fetchAllHotelsFulfilled,
  fetchAllHotelsPending,
  fetchAllHotelsRejected,
} from './reducers';
import { State } from './types';

const initialState: State = {
  hotels: hotelsAdapter.getInitialState(),
  queryConfig: {
    filter: 'Paris',
  },
  loading: false,
  error: null,
};

const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    changeCityFilter: changeCityFilterReducer,
  },
  extraReducers: (builder) => {
    builder
      /* FETCH ALL HOTELS */
      .addCase(fetchAllHotels.pending, fetchAllHotelsPending)
      .addCase(fetchAllHotels.fulfilled, fetchAllHotelsFulfilled)
      .addCase(fetchAllHotels.rejected, fetchAllHotelsRejected);
  },
});

export const { changeCityFilter } = hotelsSlice.actions;

export default hotelsSlice.reducer;

export const { selectAll: selectAllHotels } = hotelsAdapter.getSelectors(
  (state: RootState) => state.HOTELS.hotels,
);

export const selectCityFilter = (state: RootState) => {
  return state.HOTELS.queryConfig.filter;
};

export const selectFilteredHotels = createSelector(
  selectAllHotels,
  selectCityFilter,
  (hotels, filter): Hotel[] => {
    const filteredHotels = hotels.filter((hotel) => hotel.city.name === filter);
    return filteredHotels;
  },
);
