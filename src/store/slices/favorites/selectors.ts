import { Reducer } from '~/constants';
import { State } from '~/types';

import { FavoritesInProgress } from './types';

export const selectFavoritesInProgress = (
  state: State,
): FavoritesInProgress => {
  return state[Reducer.Favorites].favoritesInProgress;
};

export const selectError = (state: State): Error | null => {
  return state[Reducer.Favorites].error;
};
