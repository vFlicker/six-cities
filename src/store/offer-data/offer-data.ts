import { createReducer } from '@reduxjs/toolkit';
import {
  changeCityName,
  changeSortType,
  offersError,
  offersLoaded,
  offersRequested,
} from '../action';
import { CityName, SortType } from '../../const';
import { TOffer } from '../../types/offer';
import { TOfferDataState } from '../../types/state';
import { sortByPriceHighToLow, sortByPriceLowToHigh, topRatedFirst } from '../../utils';

const getOffers = (state: TOfferDataState, offers: TOffer[]) => {
  const { currentCityName, currentSortType } = state;

  const filteredOffers = offers
    .filter((offer) => offer.city.name === currentCityName)
    .slice(0, 6);

  switch (currentSortType) {
    case SortType.PRICE_HIGH_TO_LOW:
      return filteredOffers.sort(sortByPriceHighToLow);
    case SortType.PRICE_LOW_TO_HIGH:
      return filteredOffers.sort(sortByPriceLowToHigh);
    case SortType.TOP_RATED_FIRST:
      return filteredOffers.sort(topRatedFirst);
    default:
      return filteredOffers;
  }
};

const initialState: TOfferDataState = {
  currentCityName: CityName.AMSTERDAM,
  currentSortType: SortType.POPULAR,
  offers: [],
  loading: true,
  error: null,
};

const offerData = createReducer(initialState, (builder) => {
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

export default offerData;
