import { ErrorType, Review, RootState } from '~/types';

import { ReducerName } from '../../constants';

export const getComments = (state: RootState): Review[] => {
  return state[ReducerName.COMMENTS].comments;
};

export const getLoadingStatus = (state: RootState): boolean => {
  return state[ReducerName.COMMENTS].loading;
};

export const getError = (state: RootState): ErrorType => {
  return state[ReducerName.COMMENTS].error;
};
