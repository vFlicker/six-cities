import { AuthStatus, Reducer } from '~/constants';
import { State, User } from '~/types';

export const getAuthStatus = (state: State): AuthStatus => {
  return state[Reducer.User].authStatus;
};

export const getUser = (state: State): User | null => {
  return state[Reducer.User].user;
};

export const getLoadingStatus = (state: State): boolean => {
  return state[Reducer.User].loading;
};

export const getError = (state: State): unknown => {
  return state[Reducer.User].error;
};
