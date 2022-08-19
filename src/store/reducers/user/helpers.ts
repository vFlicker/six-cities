import { AuthStatus } from '~/constants';

export const isCheckedAuth = (authStatus: AuthStatus): boolean => {
  return authStatus === AuthStatus.Unknown;
};

export const isUserAuthorized = (authStatus: AuthStatus): boolean => {
  return authStatus === AuthStatus.Auth;
};
