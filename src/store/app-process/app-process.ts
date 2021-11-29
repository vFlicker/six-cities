import { ActionType } from '../../const';
import { NameSpace } from '../root-reducer';
import { TRootAction } from '../../types/action';
import { TAppState, TRootState } from '../../types/state';

const appProcess = (state: TRootState, action: TRootAction): TAppState => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_CARD:
      return {
        ...state[NameSpace.APP_PROCESS],
        activeCardId: action.payload,
      };
    case ActionType.CHANGE_CITY_NAME:
      return {
        ...state[NameSpace.APP_PROCESS],
        currentCityName: action.payload,
      };
    case ActionType.CHANGE_SORT_TYPE:
      return {
        ...state[NameSpace.APP_PROCESS],
        currentSortType: action.payload,
      };
    default:
      return state[NameSpace.APP_PROCESS];
  }
};

export default appProcess;
