import { Reducer } from '~/constants';
import { Error, Offer, State } from '~/types';

export const selectOffer = (state: State): Offer | null => {
  return state[Reducer.Offer].offer;
};

export const selectIsLoading = (state: State): boolean => {
  return state[Reducer.Offer].loading;
};

export const selectError = (state: State): Error => {
  return state[Reducer.Offer].error;
};
