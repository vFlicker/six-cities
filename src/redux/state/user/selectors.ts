import { AuthorizationStatus, ReducerName } from '@/constants';
import { User } from '@/types';

import { RootState } from '../root-reducer';

export const getAuthorizationStatus = (state: RootState): AuthorizationStatus => (
  state[ReducerName.User].authorizationStatus
);

export const getUser = (state: RootState): User | null => (
  state[ReducerName.User].user
);
