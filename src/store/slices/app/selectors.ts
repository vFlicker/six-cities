import { CityName, Reducer, SortType } from '~/constants';
import { State } from '~/types';

export const selectCurrentCityName = (state: State): CityName => {
  return state[Reducer.App].currentCityName;
};

export const selectCurrentSortType = (state: State): SortType => {
  return state[Reducer.App].currentSortType;
};

export const selectActiveCardId = (state: State): number => {
  return state[Reducer.App].activeCardId;
};
