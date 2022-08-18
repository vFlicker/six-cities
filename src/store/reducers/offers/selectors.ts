import { createSelector } from '@reduxjs/toolkit';

import { ErrorType, Offers, RootState } from '~/types';

import { getCurrentCityName, getCurrentSortType } from '../app';
import { ReducerName } from '../../constants';
import { sortOffers } from './utils';

const getOffers = (state: RootState): Offers | null =>
  state[ReducerName.OFFERS].offers;

const getFilteredOffers = createSelector(
  getOffers,
  getCurrentCityName,
  (offers, cityName) => (offers ? offers[cityName.toLocaleLowerCase()] : []),
);

export const getOffersLoadingStatus = (state: RootState): boolean =>
  state[ReducerName.OFFERS].loading;

export const getOffersError = (state: RootState): ErrorType =>
  state[ReducerName.OFFERS].error;

export const getSortedOffers = createSelector(
  getFilteredOffers,
  getCurrentSortType,
  (offers, sortType) => (offers ? sortOffers(offers, sortType) : null),
);
