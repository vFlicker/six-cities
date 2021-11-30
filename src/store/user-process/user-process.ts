import { ActionType, AuthorizationStatus } from '../../const';
import { TRootAction } from '../../types/action';
import { TUserProcessState } from '../../types/state';

const initialState: TUserProcessState = {
  loading: true,
  error: null,
  authorizationStatus: AuthorizationStatus.AUTH,
  user: null,
};

const userProcess = (state = initialState, action: TRootAction): TUserProcessState => {
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
      return state;
  }
};

export default userProcess;
