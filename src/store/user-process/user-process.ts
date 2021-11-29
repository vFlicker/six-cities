import { ActionType, AuthorizationStatus } from '../../const';
import { NameSpace } from '../root-reducer';
import { TRootAction } from '../../types/action';
import { TRootState, TUserProcessState } from '../../types/state';

const userProcess = (state: TRootState, action: TRootAction): TUserProcessState => {
  switch (action.type) {
    case ActionType.LOGIN_REQUEST:
      return {
        authorizationStatus: AuthorizationStatus.UNKNOWN,
        user: null,
        loading: true,
        error: null,
      };
    case ActionType.LOGIN_SUCCESS:
      return {
        authorizationStatus: AuthorizationStatus.AUTH,
        user: action.payload,
        loading: false,
        error: null,
      };
    case ActionType.LOGIN_FAILURE:
      return {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        user: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state[NameSpace.USER_PROCESS];
  }
};

export default userProcess;
