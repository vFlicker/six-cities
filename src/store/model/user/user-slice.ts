import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { checkAuthStatus, login, logout } from './action';
import { AuthorizationStatus, ReducerName } from '../../../const';
import ApiError from '../../../errors';
import { TUser } from '../../../types/user';

export type UserState = typeof initialState;

const initialState = {
  authorizationStatus: AuthorizationStatus.NoAuth,
  user: {} as TUser,
  loading: true,
  error: null as (ApiError | null),
};

export const userSlice = createSlice({
  name: ReducerName.User,
  initialState,
  reducers: {
    setAuthorizationStatus: (state, action: PayloadAction<AuthorizationStatus>) => {
      state.authorizationStatus = action.payload;
    },
    setUserData: (state, action: PayloadAction<TUser>) => {
      state.user = action.payload;
    },
  },
  extraReducers: ((builder) => {
    builder.addCase(checkAuthStatus.pending, (state) => {
      state.authorizationStatus = AuthorizationStatus.Unknown;
      state.loading = true;
      state.error = null;
    });
    builder.addCase(checkAuthStatus.fulfilled, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(checkAuthStatus.rejected, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
      state.loading = false;
      state.error = action.payload as ApiError;
    });
    builder.addCase(login.pending, (state) => {
      state.authorizationStatus = AuthorizationStatus.Unknown;
      state.loading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
      state.loading = false;
      state.error = action.payload as ApiError;
    });
    builder.addCase(logout.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as ApiError;
    });
  }),
});

export const { setAuthorizationStatus } = userSlice.actions;
