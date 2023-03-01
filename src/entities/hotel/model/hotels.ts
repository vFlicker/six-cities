import { createSelector, createSlice } from '@reduxjs/toolkit';

import { fetchAllHotels } from '~/shared/apiActions';
import { CityName, Hotel } from '~/shared/types/hotel';

import { DEFAULT_FILTER, DEFAULT_SORT } from '../config';
import { hotelsAdapter, sortHotels } from '../lib';
import { HotelsState, Sort } from '../types';
import {
  changeFilterReducer,
  changeSortReducer,
  fetchAllHotelsFulfilled,
  fetchAllHotelsPending,
  fetchAllHotelsRejected,
} from './reducers';

const initialState: HotelsState = {
  hotels: hotelsAdapter.getInitialState(),
  queryConfig: {
    filter: DEFAULT_FILTER,
    sort: DEFAULT_SORT,
  },
  loading: false,
  error: null,
};

const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    changeFilter: changeFilterReducer,
    changeSort: changeSortReducer,
  },
  extraReducers: (builder) => {
    builder
      /* FETCH ALL HOTELS */
      .addCase(fetchAllHotels.pending, fetchAllHotelsPending)
      .addCase(fetchAllHotels.fulfilled, fetchAllHotelsFulfilled)
      .addCase(fetchAllHotels.rejected, fetchAllHotelsRejected);
  },
});

export const { changeFilter, changeSort } = hotelsSlice.actions;

export default hotelsSlice.reducer;

export const { selectAll: selectAllHotels } = hotelsAdapter.getSelectors(
  (state: RootState) => state.HOTELS.hotels,
);

export const selectFilter = (state: RootState): CityName => {
  return state.HOTELS.queryConfig.filter;
};

export const selectSort = (state: RootState): Sort => {
  return state.HOTELS.queryConfig.sort;
};

const selectFilteredHotels = createSelector(
  selectAllHotels,
  selectFilter,
  (hotels, filter): Hotel[] => {
    const filteredHotels = hotels.filter((hotel) => hotel.city.name === filter);
    return filteredHotels;
  },
);

export const selectFilteredAndSortedHotels = createSelector(
  selectFilteredHotels,
  selectSort,
  (hotels, sort): Hotel[] => {
    const filteredAndSortedHotels = sortHotels(hotels, sort);
    return filteredAndSortedHotels;
  },
);
