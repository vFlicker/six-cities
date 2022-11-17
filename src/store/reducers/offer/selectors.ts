import { createSelector } from '@reduxjs/toolkit';

import { Reducer } from '~/constants';
import { ErrorType, Offer, OffersDictionary, RootState } from '~/types';

import { getCurrentCityName, getCurrentSortType } from '../app';
import { sortOffers } from './utils';

const getOffersDictionary = (state: RootState): OffersDictionary | null => {
  return state[Reducer.Offer].offers;
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
  return state[Reducer.Offer].offer;
};

export const getFavorites = (state: RootState): OffersDictionary => {
  return state[Reducer.Offer].favorites;
};

export const getNearby = (state: RootState): Offer[] => {
  return state[Reducer.Offer].nearby;
};

export const getLoadingStatus = (state: RootState): boolean => {
  return state[Reducer.Offer].loading.length !== 0;
};

export const getError = (state: RootState): ErrorType => {
  return state[Reducer.Offer].error;
};
