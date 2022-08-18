import { AuthorizationStatus } from '@/constants';
import { AuthorizationStatus as TAuthorizationStatus } from '@/types';

export const isCheckedAuth = (
  authorizationStatus: TAuthorizationStatus,
): boolean => authorizationStatus === AuthorizationStatus.UNKNOWN;

export const isUserAuthorized = (
  authorizationStatus: TAuthorizationStatus,
): boolean => authorizationStatus === AuthorizationStatus.AUTH;
