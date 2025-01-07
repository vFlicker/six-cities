import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { AppRoute, browserHistory } from '~/shared/libs/router';

export enum AuthStatus {
  Authenticated = 'AUTHENTICATED',
  Unauthenticated = 'UNAUTHENTICATED',
  Unknown = 'UNKNOWN',
}

type AuthState = {
  isAuthenticated: AuthStatus;
  setAuthenticated: (value: AuthStatus) => void;
  redirectToRoute: (route: AppRoute) => void;
};
export const useAuthStore = create<AuthState>()(
  devtools((set) => ({
    isAuthenticated: AuthStatus.Unknown,
    setAuthenticated: (value) => set({ isAuthenticated: value }),
    redirectToRoute: (route) => {
      browserHistory.push(route);
    },
  })),
);

export const getIsAuthenticated = (state: AuthState) => {
  return state.isAuthenticated === AuthStatus.Authenticated;
};

export const getIsAuthChecked = (state: AuthState) => {
  return state.isAuthenticated !== AuthStatus.Unknown;
};
