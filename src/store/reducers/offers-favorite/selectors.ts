import { ErrorType, OffersDictionary, RootState } from '~/types';

import { ReducerName } from '../../constants';

export const getOffersFavorite = (state: RootState): OffersDictionary => {
  return state[ReducerName.OFFERS_FAVORITE].offersFavorite;
};

export const getOffersFavoriteLoadingStatus = (state: RootState): boolean => {
  return state[ReducerName.OFFERS_FAVORITE].loading;
};

export const getOffersFavoriteError = (state: RootState): ErrorType => {
  return state[ReducerName.OFFERS_FAVORITE].error;
};
