import { createSelector } from '@reduxjs/toolkit';

import { Reducer } from '~/constants';
import { ErrorType, Offer, OffersDictionary, RootState } from '~/types';

import { getCurrentCityName, getCurrentSortType } from '../app';
import { sortOffers } from './utils';

const getOffersDictionary = (state: RootState): OffersDictionary | null => {
  return state[Reducer.Offers].offers;
};

const getFilteredOffers = createSelector(
  getOffersDictionary,
  getCurrentCityName,
  (offers, cityName) => {
    return offers ? offers[cityName.toLocaleLowerCase()] : [];
  },
);

export const getOffers = createSelector(
  getFilteredOffers,
  getCurrentSortType,
  (offers, sortType) => {
    return offers.length ? sortOffers(offers, sortType) : [];
  },
);

export const getOffer = (state: RootState): Offer | null => {
  return state[Reducer.Offers].offer;
};

export const getFavorites = (state: RootState): OffersDictionary => {
  return state[Reducer.Offers].favorites;
};

export const getNearby = (state: RootState): Offer[] => {
  return state[Reducer.Offers].nearby;
};

export const getLoadingStatus = (state: RootState): boolean => {
  return state[Reducer.Offers].loading.length !== 0;
};

export const getError = (state: RootState): ErrorType => {
  return state[Reducer.Offers].error;
};
