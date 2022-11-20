import { Reducer } from '~/constants';
import { Error, Review, State } from '~/types';

export const getComments = (state: State): Review[] => {
  return state[Reducer.Comments].comments;
};

export const getLoadingStatus = (state: State): boolean => {
  return state[Reducer.Comments].loading;
};

export const getError = (state: State): Error => {
  return state[Reducer.Comments].error;
};
