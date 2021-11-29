import ApiError from '../../errors';
import { NameSpace } from '../root-reducer';
import { TOffer } from '../../types/offer';
import { TRootState } from '../../types/state';

export const getOffers = (state: TRootState): TOffer[] => (
  state[NameSpace.OFFER_DATA].offers
);

export const getLoading = (state: TRootState): boolean => (
  state[NameSpace.OFFER_DATA].loading
);

export const getError = (state: TRootState): ApiError | null => (
  state[NameSpace.OFFER_DATA].error
);
