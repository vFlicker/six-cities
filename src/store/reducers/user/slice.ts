import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppRoute, AuthStatus } from '~/constants';
import { User } from '~/types';

import { ReducerName } from '../../constants';
import { checkAuthStatus, login, logout } from './api-actions';

const initialState = {
  authStatus: AuthStatus.NoAuth,
  user: null as User | null,
  loading: false,
  error: null as unknown,
};

const slice = createSlice({
  name: ReducerName.USER,
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
