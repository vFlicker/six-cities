import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { APIRoute, AppRoute } from '../../../const';
import { Adapter, dropToken, saveToken } from '../../../services';
import ApiError from '../../../errors';
import { AsyncThunkOptions } from '../../../types/action';
import { TAuthData } from '../../../types/auth-data';
import { TUser } from '../../../types/user';

export enum ActionType {
  RedirectToRoute = 'userData/redirectToRoute',
}

export const redirectToRoute = createAction(
  ActionType.RedirectToRoute,
  (url: AppRoute) => ({
    payload: url,
  }),
);

export const checkAuthStatus = createAsyncThunk<TUser, void, AsyncThunkOptions>(
  'userData/authStatus',
  async (_, { extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.get<TUser>(APIRoute.Login);
      return Adapter.transformUser(data);
    } catch (error) {
      return rejectWithValue(error as ApiError);
    }
  },
);

export const login = createAsyncThunk<TUser, TAuthData, AsyncThunkOptions>(
  'userData/login',
  async (authData, { dispatch, extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.post<TUser>(APIRoute.Login, authData);
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
      await apiService.delete(APIRoute.Logout);

      return dropToken();
    } catch (error) {
      return rejectWithValue(error as ApiError);
    }
  },
);
