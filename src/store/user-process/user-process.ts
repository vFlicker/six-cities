import { createReducer } from '@reduxjs/toolkit';
import {
  checkAuthStatusFailure,
  checkAuthStatusRequest,
  checkAuthStatusSuccess,
  loginFailure,
  loginRequest,
  loginSuccess,
  logoutFailure,
  logoutRequest,
  logoutSuccess,
} from './action';
import { AuthorizationStatus } from '../../const';
import { TUserProcessState } from '../../types/state';

const initialState: TUserProcessState = {
  loading: true,
  error: null,
  authorizationStatus: AuthorizationStatus.NoAuth,
  user: null,
};

const userProcess = createReducer(initialState, ((builder) => {
  builder
    .addCase(checkAuthStatusRequest, (state) => {
      state.authorizationStatus = AuthorizationStatus.Unknown;
      state.user = null;
      state.loading = true;
      state.error = null;
    })
    .addCase(checkAuthStatusSuccess, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    })
    .addCase(checkAuthStatusFailure, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
      state.user = null;
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(loginRequest, (state) => {
      state.authorizationStatus = AuthorizationStatus.Unknown;
      state.user = null;
      state.loading = true;
      state.error = null;
    })
    .addCase(loginSuccess, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    })
    .addCase(loginFailure, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
      state.user = null;
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(logoutRequest, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(logoutSuccess, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
      state.user = null;
      state.loading = false;
      state.error = null;
    })
    .addCase(logoutFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
}));

export default userProcess;
