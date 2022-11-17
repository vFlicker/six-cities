import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppRoute, AuthStatus, Reducer } from '~/constants';
import { ErrorType, User } from '~/types';

import { checkAuthStatus, login, logout } from './api-actions';

type State = {
  authStatus: AuthStatus;
  user: User | null;
  loading: boolean;
  error: ErrorType;
};

const initialState: State = {
  authStatus: AuthStatus.NoAuth,
  user: null,
  loading: false,
  error: null,
};

const slice = createSlice({
  name: Reducer.User,
  initialState,
  reducers: {
    setAuthStatus: (state, action: PayloadAction<AuthStatus>) => {
      state.authStatus = action.payload;
    },
    setUserData: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // ----- CHECK AUTH STATUS -----
      .addCase(checkAuthStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(checkAuthStatus.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(checkAuthStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ----- LOGIN -----
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ----- LOGOUT -----
      .addCase(logout.pending, (state) => {
        state.user = null;
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const redirectToRoute = createAction<AppRoute>(
  'userData/redirectToRoute',
);
export const { setAuthStatus, setUserData } = slice.actions;
export default slice;
