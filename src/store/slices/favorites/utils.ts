import { FavoritesInProgress } from './types';

export const addProgress = (
  data: FavoritesInProgress,
  id: number,
): FavoritesInProgress => [...data, id];

export const removeProgress = (
  data: FavoritesInProgress,
  id: number,
): FavoritesInProgress => {
  return data.filter((item) => item !== id);
};
