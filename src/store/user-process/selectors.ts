import { AuthorizationStatus, ReducerName } from '../../const';
import { TRootState } from '../../types/state';
import { TUser } from '../../types/user';

export const getAuthorizationStatus = (state: TRootState): AuthorizationStatus => (
  state[ReducerName.USER_PROCESS].authorizationStatus
);

export const getUser = (state: TRootState): TUser | null => (
  state[ReducerName.USER_PROCESS].user
);
