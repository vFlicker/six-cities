import { createSelector } from '@reduxjs/toolkit';

import { Reducer } from '~/constants';
import { Error, Offer, OffersDictionary, State } from '~/types';

import { selectCurrentCityName, selectCurrentSortType } from '../app';
import { sortOffers } from './utils';

const selectOffersDictionary = (state: State): OffersDictionary | null => {
  return state[Reducer.Offers].offers;
};

const selectFilteredOffers = createSelector(
  selectOffersDictionary,
  selectCurrentCityName,
  (offers, cityName) => {
    return offers ? offers[cityName.toLocaleLowerCase()] : [];
  },
);

export const selectOffers = createSelector(
  selectFilteredOffers,
  selectCurrentSortType,
  (offers, sortType) => {
    return offers.length ? sortOffers(offers, sortType) : [];
  },
);

export const selectFavorites = (state: State): OffersDictionary | null => {
  return state[Reducer.Offers].favorites;
};

export const selectNearby = (state: State): Offer[] => {
  return state[Reducer.Offers].nearby;
};

export const selectLoadingStatus = (state: State): boolean => {
  return state[Reducer.Offers].loading;
};

export const selectError = (state: State): Error => {
  return state[Reducer.Offers].error;
};
