import { AuthorizationStatus } from '@/constants';

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean => (
  authorizationStatus === AuthorizationStatus.Unknown
);

export const isUserAuthorized = (authorizationStatus: AuthorizationStatus): boolean => (
  authorizationStatus === AuthorizationStatus.Auth
);
