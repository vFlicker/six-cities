import { AuthStatus } from '~/constants';
import { RootState, User } from '~/types';

import { ReducerName } from '../../constants';

export const getAuthStatus = (state: RootState): AuthStatus => {
  return state[ReducerName.USER].authStatus;
};

export const getUser = (state: RootState): User | null => {
  return state[ReducerName.USER].user;
};

export const getLoadingStatus = (state: RootState): boolean => {
  return state[ReducerName.USER].loading;
};
