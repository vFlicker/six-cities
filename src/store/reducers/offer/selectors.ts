import { ApiError } from '@/services';
import { Offer } from '@/types';

import { ReducerName } from '../constants';
import { RootState } from '../root-reducer';

export const getOffer = (state: RootState): Offer | null => (
  state[ReducerName.OFFER].offer
);

export const getOfferLoadingStatus = (state: RootState): boolean => (
  state[ReducerName.OFFER].loading
);

export const getOfferError = (state: RootState): ApiError | null => (
  state[ReducerName.OFFER].error
);
