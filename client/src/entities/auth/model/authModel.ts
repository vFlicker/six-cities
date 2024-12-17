import { createSlice } from '@reduxjs/toolkit';

import { StoreSlice } from '~/shared/libs/state';

import { login, register } from './authActions';

type AuthState = {
  authStatus: AuthStatus;
  isLoading: boolean;
  error: unknown;
};

const enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const initialState: AuthState = {
  authStatus: AuthStatus.Unknown,
  isLoading: false,
  error: null,
};

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.authStatus = AuthStatus.NoAuth;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.authStatus = AuthStatus.Unknown;
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state) => {
      state.authStatus = AuthStatus.Auth;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.authStatus = AuthStatus.NoAuth;
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(register.pending, (state) => {
      state.authStatus = AuthStatus.Unknown;
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(register.fulfilled, (state) => {
      state.authStatus = AuthStatus.Auth;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.authStatus = AuthStatus.NoAuth;
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default authReducer.reducer;

export const { logout } = authReducer.actions;

export const getIsAuthStatus = (state: RootState): boolean => {
  return state[StoreSlice.Auth].authStatus === AuthStatus.Auth;
};

export const getIsLoading = (state: RootState): boolean => {
  return state[StoreSlice.Auth].isLoading;
};
