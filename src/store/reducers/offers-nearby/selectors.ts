import { ErrorType, Offer, RootState } from '~/types';

import { ReducerName } from '../../constants';

export const getOffers = (state: RootState): Offer[] =>
  state[ReducerName.OFFERS_NEARBY].offers;

export const getLoadingStatus = (state: RootState): boolean =>
  state[ReducerName.OFFERS_NEARBY].loading;

export const getError = (state: RootState): ErrorType =>
  state[ReducerName.OFFERS_NEARBY].error;
