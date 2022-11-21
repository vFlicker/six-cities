import { Reducer } from '~/constants';
import { State } from '~/types';

import { FavoritesInProgress } from './types';

export const getFavoritesInProgress = (state: State): FavoritesInProgress => {
  return state[Reducer.Favorites].favoritesInProgress;
};

export const getError = (state: State): Error | null => {
  return state[Reducer.Favorites].error;
};
