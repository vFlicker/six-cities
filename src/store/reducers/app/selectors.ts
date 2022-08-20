import { CityName } from '~/constants';
import { RootState, SortType } from '~/types';

import { ReducerName } from '../../constants';

// TODO: use appSelector
export const getCurrentCityName = (state: RootState): CityName => {
  return state[ReducerName.APP].currentCityName;
};

export const getCurrentSortType = (state: RootState): SortType => {
  return state[ReducerName.APP].currentSortType;
};
export const getActiveCardId = (state: RootState): number => {
  return state[ReducerName.APP].activeCardId;
};

// TODO: crate appLoaderSelector
