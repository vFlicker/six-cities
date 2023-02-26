import { ApiError } from '~/shared/api';
import { User } from '~/shared/types/user';

export type AuthStatus = 'authenticated' | 'unauthenticated' | 'unknown';

export type State = {
  authStatus: AuthStatus;
  user: User | null;
  loading: boolean;
  error: ApiError | null;
};
