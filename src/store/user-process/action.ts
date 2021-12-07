import { createAction } from '@reduxjs/toolkit';
import { TUser } from '../../types/user';
import ApiError from '../../errors';

enum ActionType {
  CheckAuthStatusRequest = 'userData/checkAuthStatusRequest',
  CheckAuthStatusSuccess = 'userData/checkAuthStatusSuccess',
  CheckAuthStatusFailure = 'userData/checkAuthStatusFailure',
  LoginRequest = 'userData/loginRequest',
  LoginSuccess = 'userData/loginSuccess',
  LoginFailure = 'userData/loginFailure',
  LogoutRequest = 'userData/logoutRequest',
  LogoutSuccess = 'userData/logoutSuccess',
  LogoutFailure = 'userData/logoutFailure',
}

export const checkAuthStatusRequest = createAction(ActionType.CheckAuthStatusRequest);

export const checkAuthStatusSuccess = createAction(ActionType.CheckAuthStatusSuccess);

export const checkAuthStatusFailure = createAction(
  ActionType.CheckAuthStatusFailure,
  (error: ApiError) => ({
    payload: error,
  }),
);

export const loginRequest = createAction(ActionType.LoginRequest);

export const loginSuccess = createAction(
  ActionType.LoginSuccess,
  (userData: TUser) => ({
    payload: userData,
  }),
);

export const loginFailure = createAction(
  ActionType.LoginFailure,
  (error: ApiError) => ({
    payload: error,
  }),
);

export const logoutRequest = createAction(ActionType.LogoutRequest);

export const logoutSuccess = createAction(ActionType.LogoutSuccess);

export const logoutFailure = createAction(
  ActionType.LogoutFailure,
  (error: ApiError) => ({
    payload: error,
  }),
);
