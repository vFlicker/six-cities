import { createSelector } from '@reduxjs/toolkit';

import { CityName, ReducerName, SortType } from '../../../const';
import ApiError from '../../../errors';
import { TGroupedOffers } from '../../../types/offer';
import { RootState } from '../../../types/state';
import { sortOffers } from '../../../utils/sort';

export const getCurrentCityName = (state: RootState): CityName => (
  state[ReducerName.Offers].currentCityName
);

export const getCurrentSortType = (state: RootState): SortType => (
  state[ReducerName.Offers].currentSortType
);

export const getGroupedOffers = (state: RootState): TGroupedOffers | null => (
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
