import { AuthStatus, Reducer } from '~/constants';
import { RootState, User } from '~/types';

export const getAuthStatus = (state: RootState): AuthStatus => {
  return state[Reducer.User].authStatus;
};

export const getUser = (state: RootState): User | null => {
  return state[Reducer.User].user;
};

export const getLoadingStatus = (state: RootState): boolean => {
  return state[Reducer.User].loading;
};

export const getError = (state: RootState): unknown => {
  return state[Reducer.User].error;
};
