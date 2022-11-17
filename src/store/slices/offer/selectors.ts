import { Reducer } from '~/constants';
import { Error, Offer, RootState } from '~/types';

export const getOffer = (state: RootState): Offer | null => {
  return state[Reducer.Offer].offer;
};

export const getLoadingStatus = (state: RootState): boolean => {
  return state[Reducer.Offer].loading;
};

export const getError = (state: RootState): Error => {
  return state[Reducer.Offer].error;
};
