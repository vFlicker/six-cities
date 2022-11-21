import { AuthStatus, Reducer } from '~/constants';
import { State, User } from '~/types';

export const selectAuthStatus = (state: State): AuthStatus => {
  return state[Reducer.User].authStatus;
};

export const selectUser = (state: State): User | null => {
  return state[Reducer.User].user;
};

export const selectLoadingStatus = (state: State): boolean => {
  return state[Reducer.User].loading;
};

export const selectError = (state: State): unknown => {
  return state[Reducer.User].error;
};
