import { AuthorizationStatus, RootState, User } from '@/types';

import { ReducerName } from '../../constants';

export const getAuthorizationStatus = (state: RootState): AuthorizationStatus => (
  state[ReducerName.USER].authorizationStatus
);

export const getUser = (state: RootState): User | null => (
  state[ReducerName.USER].user
);

export const getLoadingStatus = (state: RootState): boolean => (
  state[ReducerName.USER].loading
);
