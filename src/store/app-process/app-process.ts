import { ActionType } from '../../const';
import { TRootAction } from '../../types/action';
import { TAppProcessState } from '../../types/state';

const initialState: TAppProcessState = {
  activeCardId: -1,
};

const appProcess = (state = initialState, action: TRootAction): TAppProcessState => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_CARD:
      return {
        ...state,
        activeCardId: action.payload,
      };
    default:
      return state;
  }
};

export default appProcess;
