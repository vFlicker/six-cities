import { Reducer } from '~/constants';
import { Error, Review, RootState } from '~/types';

export const getComments = (state: RootState): Review[] => {
  return state[Reducer.Comments].comments;
};

export const getLoadingStatus = (state: RootState): boolean => {
  return state[Reducer.Comments].loading;
};

export const getError = (state: RootState): Error => {
  return state[Reducer.Comments].error;
};
