import { ReducerName } from '../../const';
import ApiError from '../../errors';
import { TOffers } from '../../types/offer';
import { TRootState } from '../../types/state';

export const getOffersNearby = (state: TRootState): TOffers => (
  state[ReducerName.OffersNearbyData].offersNearby
);

export const getOffersNearbyLoadingStatus = (state: TRootState): boolean => (
  state[ReducerName.OffersNearbyData].loading
);

export const getOffersNearbyError = (state: TRootState): ApiError | null => (
  state[ReducerName.OffersNearbyData].error
);
