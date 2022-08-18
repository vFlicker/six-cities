import { ErrorType, Offer, RootState } from '~/types';

import { ReducerName } from '../../constants';

export const getOffersFavorite = (state: RootState): Offer[] =>
  state[ReducerName.OFFERS_FAVORITE].offersFavorite;

export const getOffersFavoriteLoadingStatus = (state: RootState): boolean =>
  state[ReducerName.OFFERS_FAVORITE].loading;

export const getOffersFavoriteError = (state: RootState): ErrorType =>
  state[ReducerName.OFFERS_FAVORITE].error;
