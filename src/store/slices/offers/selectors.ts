import { createSelector } from '@reduxjs/toolkit';

import { Reducer } from '~/constants';
import { Error, Offer, PartialOffersByCity, State } from '~/types';

import { selectCurrentCityName, selectCurrentSortType } from '../app';
import { createFavoritesByCity, sortOffers } from './utils';

const selectAllOffers = (state: State): Offer[] => {
  return state[Reducer.Offers].offers;
};

const selectFavorites = (state: State): Offer[] => {
  return state[Reducer.Offers].favorites;
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

export const selectLoadingStatus = (state: State): boolean => {
  return state[Reducer.Offers].loading;
};

export const selectError = (state: State): Error => {
  return state[Reducer.Offers].error;
};
