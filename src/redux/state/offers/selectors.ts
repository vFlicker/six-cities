import { createSelector } from '@reduxjs/toolkit';

import { CityName, ReducerName, SortType } from '@/constants';
import { ApiError } from '@/services';
import { GroupedOffers } from '@/types';

import { RootState } from '../root-reducer';
import { sortOffers } from './utils';

export const getCurrentCityName = (state: RootState): CityName => (
  state[ReducerName.App].currentCityName
);

export const getCurrentSortType = (state: RootState): SortType => (
  state[ReducerName.App].currentSortType
);

export const getGroupedOffers = (state: RootState): GroupedOffers | null => (
  state[ReducerName.Offers].groupedOffers
);

export const getOffers = createSelector(
  getGroupedOffers,
  getCurrentCityName,
  (groupedOffers, cityName) => (groupedOffers ? groupedOffers[cityName] : null),
);

export const getOffersLoadingStatus = (state: RootState): boolean => (
  state[ReducerName.Offers].loading
);

export const getOffersError = (state: RootState): ApiError | null => (
  state[ReducerName.Offers].error
);

export const getSortedOffers = createSelector(
  getOffers,
  getCurrentSortType,
  (offers, sortType) => (offers ? sortOffers(offers, sortType) : null),
);
