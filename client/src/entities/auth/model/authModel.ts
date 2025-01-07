import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StoreSlice } from '~/shared/libs/state';

type AuthState = {
  authStatus: AuthStatus;
};

export const enum AuthStatus {
  Authenticated = 'AUTHENTICATED',
  Unauthenticated = 'UNAUTHENTICATED',
  Unknown = 'UNKNOWN',
}

const initialState: AuthState = {
  authStatus: AuthStatus.Unknown,
};

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeAuthStatus: (state, action: PayloadAction<AuthStatus>) => {
      state.authStatus = action.payload;
    },
    logout: (state) => {
      state.authStatus = AuthStatus.Unauthenticated;
    },
  },
});

export default authReducer.reducer;

export const { logout, changeAuthStatus } = authReducer.actions;

export const getIsAuthCheckedStatus = (state: RootState): boolean => {
  return state[StoreSlice.Auth].authStatus !== AuthStatus.Unknown;
};

export const getIsIsAuthenticated = (state: RootState): boolean => {
  return state[StoreSlice.Auth].authStatus === AuthStatus.Authenticated;
};
