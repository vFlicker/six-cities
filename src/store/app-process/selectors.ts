import { CityName, SortType } from '../../const';
import { NameSpace } from '../root-reducer';
import { TRootState } from '../../types/state';

const getActiveCard = (state: TRootState): number => (
  state[NameSpace.APP_PROCESS].activeCardId
);

const getCurrentCityName = (state: TRootState): CityName => (
  state[NameSpace.APP_PROCESS].currentCityName
);

const getCurrentSortType = (state: TRootState): SortType => (
  state[NameSpace.APP_PROCESS].currentSortType
);

export {
  getActiveCard,
  getCurrentCityName,
  getCurrentSortType,
};
