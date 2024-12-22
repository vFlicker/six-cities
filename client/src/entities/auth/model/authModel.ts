import { createSlice } from '@reduxjs/toolkit';

import { StoreSlice } from '~/shared/libs/state';

import { checkAuthStatus, login, register } from './authActions';

type AuthState = {
  authStatus: AuthStatus;
  isLoading: boolean;
  error: unknown;
};

export const enum AuthStatus {
  Authenticated = 'AUTHENTICATED',
  Unauthenticated = 'UNAUTHENTICATED',
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
      state.authStatus = AuthStatus.Unauthenticated;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.authStatus = AuthStatus.Unknown;
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state) => {
        state.authStatus = AuthStatus.Authenticated;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.authStatus = AuthStatus.Unauthenticated;
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(checkAuthStatus.pending, (state) => {
        state.authStatus = AuthStatus.Unknown;
        state.isLoading = true;
        state.error = null;
      })
      .addCase(checkAuthStatus.fulfilled, (state) => {
        state.authStatus = AuthStatus.Authenticated;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(checkAuthStatus.rejected, (state) => {
        state.authStatus = AuthStatus.Unauthenticated;
        state.isLoading = false;
        state.error = null;
      })

      .addCase(register.pending, (state) => {
        state.authStatus = AuthStatus.Unknown;
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state) => {
        state.authStatus = AuthStatus.Authenticated;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.authStatus = AuthStatus.Unauthenticated;
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default authReducer.reducer;

export const { logout } = authReducer.actions;

export const getIsAuthCheckedStatus = (state: RootState): boolean => {
  return state[StoreSlice.Auth].authStatus !== AuthStatus.Unknown;
};

export const getIsIsAuthenticated = (state: RootState): boolean => {
  return state[StoreSlice.Auth].authStatus === AuthStatus.Authenticated;
};

export const getIsLoading = (state: RootState): boolean => {
  return state[StoreSlice.Auth].isLoading;
};
