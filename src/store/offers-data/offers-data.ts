import { createReducer } from '@reduxjs/toolkit';
import {
  changeCityName,
  changeSortType,
  offersError,
  offersLoaded,
  offersRequested,
} from './action';
import { CityName, SortType } from '../../const';
import { TOffersDataState } from '../../types/state';

const initialState: TOffersDataState = {
  currentCityName: CityName.Amsterdam,
  currentSortType: SortType.Popular,
  groupedOffers: null,
  loading: true,
  error: null,
};

const offersData = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityName, (state, action) => {
      state.currentCityName = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.currentSortType = action.payload;
    })
    .addCase(offersRequested, (state) => {
      state.groupedOffers = null;
      state.loading = true;
      state.error = null;
    })
    .addCase(offersLoaded, (state, action) => {
      state.groupedOffers = action.payload;
      state.loading = false;
      state.error = null;
    })
    .addCase(offersError, (state, action) => {
      state.groupedOffers = null;
      state.loading = false;
      state.error = action.payload;
    });
});

export default offersData;
