import { ReducerName } from '../../const';
import ApiError from '../../errors';
import { TOffers } from '../../types/offer';
import { TRootState } from '../../types/state';

export const getOffersFavorite = (state: TRootState): TOffers => (
  state[ReducerName.OffersFavoriteData].offersFavorite
);

export const getOffersFavoriteLoadingStatus = (state: TRootState): boolean => (
  state[ReducerName.OffersFavoriteData].loading
);

export const getOffersFavoriteError = (state: TRootState): ApiError | null => (
  state[ReducerName.OffersFavoriteData].error
);
