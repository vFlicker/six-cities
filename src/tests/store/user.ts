import { AuthStatus } from '~/constants';
import { State } from '~/store/slices/user/types';
import { error, makeUser } from '~/utils';

const user = makeUser();

export const initialState: State = {
  authStatus: AuthStatus.Unknown,
  user: null,
  loading: false,
  error: null,
};

export const authState: State = {
  ...initialState,
  authStatus: AuthStatus.Auth,
  user,
};

export const noAuthState: State = {
  ...initialState,
  authStatus: AuthStatus.NoAuth,
};

export const loadingState: State = {
  ...initialState,
  loading: true,
};

export const rejectedState: State = {
  ...initialState,
  error,
};
