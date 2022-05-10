import { ApiError } from '@/services';
import { Offer } from '@/types';

import { ReducerName } from '../constants';
import { RootState } from '../root-reducer';

export const getOffersNearby = (state: RootState): Offer[] => (
  state[ReducerName.OFFERS_NEARBY].offersNearby
);

export const getOffersNearbyLoadingStatus = (state: RootState): boolean => (
  state[ReducerName.OFFERS_NEARBY].loading
);

export const getOffersNearbyError = (state: RootState): ApiError | null => (
  state[ReducerName.OFFERS_NEARBY].error
);
