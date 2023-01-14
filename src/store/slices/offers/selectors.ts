import { createSelector } from '@reduxjs/toolkit';

import { Reducer } from '~/constants';
import { Offer, PartialOffersByCity } from '~/types/offer';
import { State } from '~/types/store';

import { selectCurrentCityName, selectCurrentSortType } from '../app/selectors';
import { createFavoritesByCity, sortOffers } from './utils';

const selectAllOffers = (state: State): Offer[] => {
  return state[Reducer.Offers].all;
};

const selectFilteredOffers = createSelector(
  selectAllOffers,
  selectCurrentCityName,
  (offers, filterType): Offer[] => {
    return offers.filter((offer) => offer.city.name === filterType);
  },
);

export const selectSortedOffers = createSelector(
  selectFilteredOffers,
  selectCurrentSortType,
  (filteredOffers, sortType): Offer[] => {
    return sortOffers(filteredOffers, sortType);
  },
);

export const selectFavorites = (state: State): Offer[] => {
  return state[Reducer.Offers].favorites;
};

export const selectFavoritesByCity = createSelector(
  selectFavorites,
  (favorites): PartialOffersByCity | null => {
    if (!favorites.length) return null;

    return createFavoritesByCity(favorites);
  },
);

export const selectNearby = (state: State): Offer[] => {
  return state[Reducer.Offers].nearby;
};

export const selectIsLoading = (state: State): boolean => {
  return state[Reducer.Offers].loading;
};

export const selectError = (state: State): string | null => {
  return state[Reducer.Offers].error;
};
