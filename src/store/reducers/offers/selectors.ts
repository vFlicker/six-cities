import { createSelector } from '@reduxjs/toolkit';

import { ErrorType, OffersDictionary, RootState } from '~/types';

import { getCurrentCityName, getCurrentSortType } from '../app';
import { ReducerName } from '../../constants';
import { sortOffers } from './utils';

const getOffers = (state: RootState): OffersDictionary | null =>
  state[ReducerName.OFFERS].offers;

const getFilteredOffers = createSelector(
  getOffers,
  getCurrentCityName,
  (offers, cityName) => {
    return offers ? offers[cityName.toLocaleLowerCase()] : [];
  },
);

export const getOffersLoadingStatus = (state: RootState): boolean => {
  return state[ReducerName.OFFERS].loading;
};

export const getOffersError = (state: RootState): ErrorType => {
  return state[ReducerName.OFFERS].error;
};

export const getSortedOffers = createSelector(
  getFilteredOffers,
  getCurrentSortType,
  (offers, sortType) => {
    return offers ? sortOffers(offers, sortType) : null;
  },
);
