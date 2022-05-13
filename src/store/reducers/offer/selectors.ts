import { ApiError } from '@/services';
import { Offer, RootState } from '@/types';

import { ReducerName } from '../constants';

export const getOffer = (state: RootState): Offer | null => (
  state[ReducerName.OFFER].offer
);

export const getOfferLoadingStatus = (state: RootState): boolean => (
  state[ReducerName.OFFER].loading
);

export const getOfferError = (state: RootState): ApiError | null => (
  state[ReducerName.OFFER].error
);
