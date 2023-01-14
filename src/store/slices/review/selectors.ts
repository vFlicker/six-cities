import { Reducer } from '~/constants';
import { Review } from '~/types/review';
import { State } from '~/types/store';

export const selectReviews = (state: State): Review[] => {
  return state[Reducer.Review].reviews;
};

export const selectIsLoading = (state: State): boolean => {
  return state[Reducer.Review].loading;
};

export const selectError = (state: State): string | null => {
  return state[Reducer.Review].error;
};
