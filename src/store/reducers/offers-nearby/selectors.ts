import { ErrorType, Offer, RootState } from '~/types';

import { ReducerName } from '../../constants';

export const getOffersNearby = (state: RootState): Offer[] =>
  state[ReducerName.OFFERS_NEARBY].offersNearby;

export const getOffersNearbyLoadingStatus = (state: RootState): boolean =>
  state[ReducerName.OFFERS_NEARBY].loading;

export const getOffersNearbyError = (state: RootState): ErrorType =>
  state[ReducerName.OFFERS_NEARBY].error;
