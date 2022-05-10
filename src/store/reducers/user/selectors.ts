import { AuthorizationStatus, User } from '@/types';

import { ReducerName } from '../constants';
import { RootState } from '../root-reducer';

export const getAuthorizationStatus = (state: RootState): AuthorizationStatus => (
  state[ReducerName.USER].authorizationStatus
);

export const getUser = (state: RootState): User | null => (
  state[ReducerName.USER].user
);
