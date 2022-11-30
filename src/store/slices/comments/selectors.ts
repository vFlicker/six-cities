import { Reducer } from '~/constants';
import { Error, Review, State } from '~/types';

export const selectComments = (state: State): Review[] => {
  return state[Reducer.Comments].comments;
};

export const selectIsLoading = (state: State): boolean => {
  return state[Reducer.Comments].loading;
};

export const selectError = (state: State): Error => {
  return state[Reducer.Comments].error;
};
