import { CityName, ReducerName, SortType } from '../../const';
import ApiError from '../../errors';
import { TOffers } from '../../types/offer';
import { TRootState } from '../../types/state';

export const getCurrentCityName = (state: TRootState): CityName => (
  state[ReducerName.OffersData].currentCityName
);

export const getCurrentSortType = (state: TRootState): SortType => (
  state[ReducerName.OffersData].currentSortType
);

export const getOffers = (state: TRootState): TOffers => (
  state[ReducerName.OffersData].offers
);

export const getOffersLoadingStatus = (state: TRootState): boolean => (
  state[ReducerName.OffersData].loading
);

export const getError = (state: TRootState): ApiError | null => (
  state[ReducerName.OffersData].error
);
