import { ReducerName } from '../../const';
import ApiError from '../../errors';
import { TOffer, TOffers } from '../../types/offer';
import { TRootState } from '../../types/state';

export const getOffer = (state: TRootState): TOffer | null => (
  state[ReducerName.OfferData].offer
);

export const getOffersNearby = (state: TRootState): TOffers => (
  state[ReducerName.OfferData].offersNearby
);

export const getOfferLoadingStatus = (state: TRootState): boolean => (
  state[ReducerName.OfferData].loading
);

export const getOfferError = (state: TRootState): ApiError | null => (
  state[ReducerName.OfferData].error
);
