export type FavoritesInProgress = number[];

export type State = {
  favoritesInProgress: FavoritesInProgress;
  error: Error | null;
};
