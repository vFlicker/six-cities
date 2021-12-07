import { createReducer } from '@reduxjs/toolkit';
import {
  changeCityName,
  changeSortType,
  offersError,
  offersLoaded,
  offersRequested,
} from './action';
import { CityName, SortType } from '../../const';
import { TOffers } from '../../types/offer';
import { TOffersDataState } from '../../types/state';
import { sortByPriceHighToLow, sortByPriceLowToHigh, topRatedFirst } from '../../utils';

const getOffers = (state: TOffersDataState, offers: TOffers) => {
  const { currentCityName, currentSortType } = state;

  const filteredOffers = offers
    .filter((offer) => offer.city.name === currentCityName)
    .slice(0, 6);

  switch (currentSortType) {
    case SortType.PriceHighToLow:
      return filteredOffers.sort(sortByPriceHighToLow);
    case SortType.PriceLowToHigh:
      return filteredOffers.sort(sortByPriceLowToHigh);
    case SortType.TopRatedFirst:
      return filteredOffers.sort(topRatedFirst);
    default:
      return filteredOffers;
  }
};

const initialState: TOffersDataState = {
  currentCityName: CityName.Amsterdam,
  currentSortType: SortType.Popular,
  offers: [],
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
      state.offers = [];
      state.loading = true;
      state.error = null;
    })
    .addCase(offersLoaded, (state, action) => {
      state.offers = getOffers(state, action.payload);
      state.loading = false;
      state.error = null;
    })
    .addCase(offersError, (state, action) => {
      state.offers = [];
      state.loading = false;
      state.error = action.payload;
    });
});

export default offersData;
