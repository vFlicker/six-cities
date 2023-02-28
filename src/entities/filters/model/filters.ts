import { createSlice } from '@reduxjs/toolkit';

import { changeCityFilterReducer } from './reducers';
import { State } from './types';

const initialState: State = {
  city: 'Paris',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeCityFilter: changeCityFilterReducer,
  },
});

export const { changeCityFilter } = filtersSlice.actions;

export default filtersSlice.reducer;

export const selectCityFilter = (state: RootState) => state.FILTERS.city;
