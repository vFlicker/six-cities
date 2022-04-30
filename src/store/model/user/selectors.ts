import { AuthorizationStatus, ReducerName } from '../../../const';
import { TUser } from '../../../types/user';
import { RootState } from '../root-reducer';

export const getAuthorizationStatus = (state: RootState): AuthorizationStatus => (
  state[ReducerName.User].authorizationStatus
);

export const getUser = (state: RootState): TUser | null => (
  state[ReducerName.User].user
);
