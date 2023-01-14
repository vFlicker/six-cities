import { AuthStatus } from '~/constants';
import { User } from '~/types/user';

export type State = {
  authStatus: AuthStatus;
  user: User | null;
  loading: boolean;
  error: string | null;
};
