import { CityName, RootState, SortType } from '@/types';

import { ReducerName } from '../../constants';

// TODO: use appSelector
export const getCurrentCityName = (state: RootState): CityName => (
  state[ReducerName.APP].currentCityName
);

export const getCurrentSortType = (state: RootState): SortType => (
  state[ReducerName.APP].currentSortType
);

export const getActiveCardId = (state: RootState): number => (
  state[ReducerName.APP].activeCardId
);
