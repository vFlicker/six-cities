import { AuthorizationStatus, ReducerName } from '../../const';
import { TRootState } from '../../types/state';
import { TUser } from '../../types/user';

export const getAuthorizationStatus = (state: TRootState): AuthorizationStatus => (
  state[ReducerName.UserProcess].authorizationStatus
);

export const getUser = (state: TRootState): TUser | null => (
  state[ReducerName.UserProcess].user
);
