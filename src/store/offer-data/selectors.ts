import { CityName, ReducerName, SortType } from '../../const';
import ApiError from '../../errors';
import { TOffer } from '../../types/offer';
import { TRootState } from '../../types/state';

export const getCurrentCityName = (state: TRootState): CityName => (
  state[ReducerName.OFFER_DATA].currentCityName
);

export const getCurrentSortType = (state: TRootState): SortType => (
  state[ReducerName.OFFER_DATA].currentSortType
);

export const getOffers = (state: TRootState): TOffer[] => (
  state[ReducerName.OFFER_DATA].offers
);

export const getLoading = (state: TRootState): boolean => (
  state[ReducerName.OFFER_DATA].loading
);

export const getError = (state: TRootState): ApiError | null => (
  state[ReducerName.OFFER_DATA].error
);
