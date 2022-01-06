import { AuthorizationStatus, ReducerName } from '../../../const';
import { RootState } from '../../../types/state';
import { TUser } from '../../../types/user';

export const getAuthorizationStatus = (state: RootState): AuthorizationStatus => (
  state[ReducerName.User].authorizationStatus
);

export const getUser = (state: RootState): TUser | null => (
  state[ReducerName.User].user
);
