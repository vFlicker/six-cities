import { AuthorizationStatus } from '~/constants';

export type AuthorizationStatus =
  typeof AuthorizationStatus[keyof typeof AuthorizationStatus];
