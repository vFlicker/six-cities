import { createSelector } from '@reduxjs/toolkit';

import { ApiError } from '@/services';
import { Offers } from '@/types';

import { getCurrentCityName, getCurrentSortType } from '../app';
import { ReducerName } from '../constants';
import { RootState } from '../root-reducer';
import { sortOffers } from './utils';

const getOffers = (state: RootState): Offers | null => (
  state[ReducerName.OFFERS].offers
);

const getFilteredOffers = createSelector(
  getOffers,
  getCurrentCityName,
  (offers, cityName) => (offers ? offers[cityName] : null),
);

export const getOffersLoadingStatus = (state: RootState): boolean => (
  state[ReducerName.OFFERS].loading
);

export const getOffersError = (state: RootState): ApiError | null => (
  state[ReducerName.OFFERS].error
);

export const getSortedOffers = createSelector(
  getFilteredOffers,
  getCurrentSortType,
  (offers, sortType) => (offers ? sortOffers(offers, sortType) : null),
);
