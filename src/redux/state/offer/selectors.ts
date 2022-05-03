import { ReducerName } from '@/constants';
import { ApiError } from '@/services';
import { Offer } from '@/types';
import { RootState } from '../root-reducer';

export const getOffer = (state: RootState): Offer | null => (
  state[ReducerName.Offer].offer
);

export const getOfferLoadingStatus = (state: RootState): boolean => (
  state[ReducerName.Offer].loading
);

export const getOfferError = (state: RootState): ApiError | null => (
  state[ReducerName.Offer].error
);
