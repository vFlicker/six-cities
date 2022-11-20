import { CityName, SortType } from '~/constants';

import { Reducer } from '~/constants';
import { State } from '~/types';

// TODO: use appSelector
export const getCurrentCityName = (state: State): CityName => {
  return state[Reducer.App].currentCityName;
};

export const getCurrentSortType = (state: State): SortType => {
  return state[Reducer.App].currentSortType;
};
export const getActiveCardId = (state: State): number => {
  return state[Reducer.App].activeCardId;
};

// TODO: crate appLoaderSelector
