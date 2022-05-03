import { createSelector } from '@reduxjs/toolkit';

import { ApiError } from '@/services';
import { CityName, GroupedOffers, SortType } from '@/types';

import { ReducerName } from '../constants';
import { RootState } from '../root-reducer';
import { sortOffers } from './utils';

export const getCurrentCityName = (state: RootState): CityName => (
  state[ReducerName.APP].currentCityName
);

export const getCurrentSortType = (state: RootState): SortType => (
  state[ReducerName.APP].currentSortType
);

export const getGroupedOffers = (state: RootState): GroupedOffers | null => (
  state[ReducerName.OFFERS].groupedOffers
);

export const getOffers = createSelector(
  getGroupedOffers,
  getCurrentCityName,
  (groupedOffers, cityName) => (groupedOffers ? groupedOffers[cityName] : null),
);

export const getOffersLoadingStatus = (state: RootState): boolean => (
  state[ReducerName.OFFERS].loading
);

export const getOffersError = (state: RootState): ApiError | null => (
  state[ReducerName.OFFERS].error
);

export const getSortedOffers = createSelector(
  getOffers,
  getCurrentSortType,
  (offers, sortType) => (offers ? sortOffers(offers, sortType) : null),
);
