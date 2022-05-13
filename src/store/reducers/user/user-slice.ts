import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthorizationStatus } from '@/constants';
import { ApiError } from '@/services';
import { AuthorizationStatus as TAuthorizationStatus, User } from '@/types';

import { ReducerName } from '../constants';
import { checkAuthStatus, login, logout } from './action';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH as TAuthorizationStatus,
  user: {} as User,
  loading: true,
  error: null as (ApiError | null),
};

export const userSlice = createSlice({
  name: ReducerName.USER,
  initialState,
  reducers: {
    setAuthorizationStatus: (state, action: PayloadAction<TAuthorizationStatus>) => {
      state.authorizationStatus = action.payload;
    },
    setUserData: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
  extraReducers: ((builder) => {
    builder.addCase(checkAuthStatus.pending, (state) => {
      state.authorizationStatus = AuthorizationStatus.UNKNOWN;
      state.loading = true;
      state.error = null;
    });
    builder.addCase(checkAuthStatus.fulfilled, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.AUTH;
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(checkAuthStatus.rejected, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
      state.loading = false;
      state.error = action.payload as ApiError;
    });
    builder.addCase(login.pending, (state) => {
      state.authorizationStatus = AuthorizationStatus.UNKNOWN;
      state.loading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.AUTH;
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
      state.loading = false;
      state.error = action.payload as ApiError;
    });
    builder.addCase(logout.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as ApiError;
    });
  }),
});

export const { setAuthorizationStatus, setUserData } = userSlice.actions;
