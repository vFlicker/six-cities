import { ErrorType, Offer, Review, RootState } from '~/types';

import { ReducerName } from '../../constants';

export const getOffer = (state: RootState): Offer | null =>
  state[ReducerName.OFFER].offer;

export const getComments = (state: RootState): Review[] =>
  state[ReducerName.OFFER].comments;

export const getOfferLoadingStatus = (state: RootState): boolean =>
  state[ReducerName.OFFER].loading;

export const getOfferError = (state: RootState): ErrorType =>
  state[ReducerName.OFFER].error;
