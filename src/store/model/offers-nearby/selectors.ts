import { ReducerName } from '../../../const';
import ApiError from '../../../errors';
import { TOffers } from '../../../types/offer';
import { RootState } from '../../../types/state';

export const getOffersNearby = (state: RootState): TOffers => (
  state[ReducerName.OffersNearby].offersNearby
);

export const getOffersNearbyLoadingStatus = (state: RootState): boolean => (
  state[ReducerName.OffersNearby].loading
);

export const getOffersNearbyError = (state: RootState): ApiError | null => (
  state[ReducerName.OffersNearby].error
);
