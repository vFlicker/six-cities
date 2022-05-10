import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { AppRoute } from '@/constants';
import { AppRoute as TAppRoute, User } from '@/types';
import { getApiRoute } from '@/utils/get-api-route';
import {
  Adapter,
  dropToken,
  saveToken,
  ApiError,
} from '@/services';

import { AsyncThunkOptions } from '../types';

export type AuthData = {
  email: string;
  password: string;
};

export const ActionType = {
  REDIRECT_TO_ROUTE: 'userData/redirectToRoute',
  AUTH_STATUS: 'userData/authStatus',
  LOGIN: 'userData/login',
  LOGOUT: 'userData/logout',
};

export const redirectToRoute = createAction(
  ActionType.REDIRECT_TO_ROUTE,
  (url: TAppRoute) => ({
    payload: url,
  }),
);

export const checkAuthStatus = createAsyncThunk<User, void, AsyncThunkOptions>(
  ActionType.AUTH_STATUS,
  async (_, { extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.get<User>(getApiRoute.login());
      return Adapter.transformUser(data);
    } catch (error) {
      return rejectWithValue(error as ApiError);
    }
  },
);

export const login = createAsyncThunk<User, AuthData, AsyncThunkOptions>(
  ActionType.LOGIN,
  async (authData, { dispatch, extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.post<User>(getApiRoute.login(), authData);
      const transformedData = Adapter.transformUser(data);
      const { token } = data;

      saveToken(token);
      dispatch(redirectToRoute(AppRoute.ROOT));

      return transformedData;
    } catch (error) {
      return rejectWithValue(error as ApiError);
    }
  },
);

export const logout = createAsyncThunk<void, void, AsyncThunkOptions>(
  ActionType.LOGOUT,
  async (_, { extra: apiService, rejectWithValue }) => {
    try {
      await apiService.delete(getApiRoute.logout());

      return dropToken();
    } catch (error) {
      return rejectWithValue(error as ApiError);
    }
  },
);
