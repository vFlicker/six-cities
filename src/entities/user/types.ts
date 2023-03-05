import { ApiError } from '~/shared/services/api';
import { User } from '~/shared/types/user';

export type AuthStatus = 'authenticated' | 'unauthenticated' | 'unknown';

export type UserState = {
  authStatus: AuthStatus;
  user: User | null;
  loading: boolean;
  error: ApiError | null;
};
