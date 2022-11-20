import { Reducer } from '~/constants';
import { State } from '~/types';

export const getError = (state: State): Error | null => {
  return state[Reducer.Favorites].error;
};
