import { CityName, Reducer, SortType } from '~/constants';
import { OfferID } from '~/types/offer';
import { State } from '~/types/store';

export const selectCurrentCityName = (state: State): CityName => {
  return state[Reducer.App].currentCityName;
};

export const selectCurrentSortType = (state: State): SortType => {
  return state[Reducer.App].currentSortType;
};

export const selectActiveCardId = (state: State): number => {
  return state[Reducer.App].activeCardId;
};

export const selectFavoriteIdsInProgress = (state: State): OfferID[] => {
  return state[Reducer.App].favoriteIdsInProgress;
};

export const selectError = (state: State): string | null => {
  return state[Reducer.App].error;
};
