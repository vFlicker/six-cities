import { Reducer } from '~/constants';
import { Error, Offer, State } from '~/types';

export const getOffer = (state: State): Offer | null => {
  return state[Reducer.Offer].offer;
};

export const getLoadingStatus = (state: State): boolean => {
  return state[Reducer.Offer].loading;
};

export const getError = (state: State): Error => {
  return state[Reducer.Offer].error;
};
