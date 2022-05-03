import { ReducerName } from '@/constants';
import { ApiError } from '@/services/api-error';
import { Offer } from '@/types/offer';

import { RootState } from '../root-reducer';

export const getOffersNearby = (state: RootState): Offer[] => (
  state[ReducerName.OffersNearby].offersNearby
);

export const getOffersNearbyLoadingStatus = (state: RootState): boolean => (
  state[ReducerName.OffersNearby].loading
);

export const getOffersNearbyError = (state: RootState): ApiError | null => (
  state[ReducerName.OffersNearby].error
);
