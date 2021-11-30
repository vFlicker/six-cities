import { CityName, SortType } from '../../const';
import ApiError from '../../errors';
import { NameSpace } from '../root-reducer';
import { TOffer } from '../../types/offer';
import { TRootState } from '../../types/state';

export const getCurrentCityName = (state: TRootState): CityName => (
  state[NameSpace.OFFER_DATA].currentCityName
);

export const getCurrentSortType = (state: TRootState): SortType => (
  state[NameSpace.OFFER_DATA].currentSortType
);

export const getOffers = (state: TRootState): TOffer[] => (
  state[NameSpace.OFFER_DATA].offers
);

export const getLoading = (state: TRootState): boolean => (
  state[NameSpace.OFFER_DATA].loading
);

export const getError = (state: TRootState): ApiError | null => (
  state[NameSpace.OFFER_DATA].error
);
