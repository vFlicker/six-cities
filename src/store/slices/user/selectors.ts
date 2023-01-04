import { AuthStatus, Reducer } from '~/constants';
import { State, User } from '~/types';

export const selectIsAuthChecked = (state: State): boolean => {
  return state[Reducer.User].authStatus !== AuthStatus.Unknown;
};

export const selectIsUserAuthorized = (state: State): boolean => {
  return state[Reducer.User].authStatus === AuthStatus.Auth;
};

export const selectUser = (state: State): User | null => {
  return state[Reducer.User].user;
};

export const selectIsLoading = (state: State): boolean => {
  return state[Reducer.User].loading;
};

export const selectError = (state: State): unknown => {
  return state[Reducer.User].error;
};
