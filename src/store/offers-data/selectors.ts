import { createSelector } from '@reduxjs/toolkit';

import { CityName, ReducerName, SortType } from '../../const';
import ApiError from '../../errors';
import { TGroupedOffers } from '../../types/offer';
import { TRootState } from '../../types/state';
import { sortOffers } from '../../utils/sort';

export const getCurrentCityName = (state: TRootState): CityName => (
  state[ReducerName.OffersData].currentCityName
);

export const getCurrentSortType = (state: TRootState): SortType => (
  state[ReducerName.OffersData].currentSortType
);

export const getGroupedOffers = (state: TRootState): TGroupedOffers => (
  state[ReducerName.OffersData].groupedOffers
);

export const getOffers = createSelector(
  getGroupedOffers,
  getCurrentCityName,
  (groupedOffers, cityName) => groupedOffers[cityName],
);

export const getOffersLoadingStatus = (state: TRootState): boolean => (
  state[ReducerName.OffersData].loading
);

export const getError = (state: TRootState): ApiError | null => (
  state[ReducerName.OffersData].error
);

export const getSortedOffers = createSelector(
  getOffers,
  getCurrentSortType,
  (offers, sortType) => sortOffers(offers, sortType),
);
