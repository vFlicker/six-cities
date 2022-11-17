import { CityName, SortType } from '~/constants';

import { Reducer } from '~/constants';
import { RootState } from '~/types';

// TODO: use appSelector
export const getCurrentCityName = (state: RootState): CityName => {
  return state[Reducer.App].currentCityName;
};

export const getCurrentSortType = (state: RootState): SortType => {
  return state[Reducer.App].currentSortType;
};
export const getActiveCardId = (state: RootState): number => {
  return state[Reducer.App].activeCardId;
};

// TODO: crate appLoaderSelector
