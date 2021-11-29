import { AuthorizationStatus } from '../../const';
import { NameSpace } from '../root-reducer';
import { TRootState } from '../../types/state';
import { TUser } from '../../types/user';

export const getAuthorizationStatus = (state: TRootState): AuthorizationStatus => (
  state[NameSpace.USER_PROCESS].authorizationStatus
);

export const getUser = (state: TRootState): TUser | null => (
  state[NameSpace.USER_PROCESS].user
);
