import { CityName, ReducerName, SortType } from '../../const';
import ApiError from '../../errors';
import { TOffers } from '../../types/offer';
import { TRootState } from '../../types/state';

export const getCurrentCityName = (state: TRootState): CityName => (
  state[ReducerName.OfferData].currentCityName
);

export const getCurrentSortType = (state: TRootState): SortType => (
  state[ReducerName.OfferData].currentSortType
);

export const getOffers = (state: TRootState): TOffers => (
  state[ReducerName.OfferData].offers
);

export const getLoading = (state: TRootState): boolean => (
  state[ReducerName.OfferData].loading
);

export const getError = (state: TRootState): ApiError | null => (
  state[ReducerName.OfferData].error
);
