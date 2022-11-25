import { FavoritesInProgress } from './types';

export const addToInProgress = (
  data: FavoritesInProgress,
  id: number,
): FavoritesInProgress => [...data, id];

export const removeFromInProgress = (
  data: FavoritesInProgress,
  id: number,
): FavoritesInProgress => {
  return data.filter((item) => item !== id);
};
