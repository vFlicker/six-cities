import { AuthStatus } from '~/constants';
import { User } from '~/types';

export type State = {
  authStatus: AuthStatus;
  user: User | null;
  loading: boolean;
  error: Error | null;
};
