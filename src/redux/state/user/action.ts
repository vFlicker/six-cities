import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { AppRoute } from '@/constants';
import { User } from '@/types';
import { getApiRoute } from '@/utils/get-api-route';
import {
  Adapter,
  dropToken,
  saveToken,
  ApiError,
} from '@/services';

import { AsyncThunkOptions, AuthData } from '../types';

export enum ActionType {
  RedirectToRoute = 'userData/redirectToRoute',
}

export const redirectToRoute = createAction(
  ActionType.RedirectToRoute,
  (url: AppRoute) => ({
    payload: url,
  }),
);

export const checkAuthStatus = createAsyncThunk<User, void, AsyncThunkOptions>(
  'userData/authStatus',
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
  'userData/login',
  async (authData, { dispatch, extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.post<User>(getApiRoute.login(), authData);
      const transformedData = Adapter.transformUser(data);
      const { token } = data;

      saveToken(token);
      dispatch(redirectToRoute(AppRoute.Root));

      return transformedData;
    } catch (error) {
      return rejectWithValue(error as ApiError);
    }
  },
);

export const logout = createAsyncThunk<void, void, AsyncThunkOptions>(
  'userData/logout',
  async (authData, { extra: apiService, rejectWithValue }) => {
    try {
      await apiService.delete(getApiRoute.logout());

      return dropToken();
    } catch (error) {
      return rejectWithValue(error as ApiError);
    }
  },
);
