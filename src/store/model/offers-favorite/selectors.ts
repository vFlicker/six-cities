import { ReducerName } from '../../../const';
import ApiError from '../../../errors';
import { TOffers } from '../../../types/offer';
import { RootState } from '../root-reducer';

export const getOffersFavorite = (state: RootState): TOffers => (
  state[ReducerName.OffersFavorite].offersFavorite
);

export const getOffersFavoriteLoadingStatus = (state: RootState): boolean => (
  state[ReducerName.OffersFavorite].loading
);

export const getOffersFavoriteError = (state: RootState): ApiError | null => (
  state[ReducerName.OffersFavorite].error
);
