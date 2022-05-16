import { createAsyncThunk } from '@reduxjs/toolkit';

import { AppRoute, AuthorizationStatus } from '@/constants';
import { User } from '@/types';
import { getApiRoute } from '@/utils/get-api-route';
import { dropToken, saveToken, errorHandler } from '@/services';

import { AsyncThunkOptions } from '../types';
import { redirectToRoute, setAuthorizationStatus } from './slice';

type AuthData = {
  email: string;
  password: string;
};

export const checkAuthStatus = createAsyncThunk<User, undefined, AsyncThunkOptions>(
  'userData/authStatus',
  async (_, { dispatch, extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.get<User>(getApiRoute.login());
      dispatch(setAuthorizationStatus(AuthorizationStatus.AUTH));
      return data;
    } catch (error) {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NO_AUTH));
      errorHandler(error);
      return rejectWithValue(error);
    }
  },
);

export const login = createAsyncThunk<User, AuthData, AsyncThunkOptions>(
  'userData/login',
  async (authData, { dispatch, extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.post<User>(getApiRoute.login(), authData);
      saveToken(data.token);
      dispatch(setAuthorizationStatus(AuthorizationStatus.AUTH));
      dispatch(redirectToRoute(AppRoute.ROOT));
      return data;
    } catch (error) {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NO_AUTH));
      errorHandler(error);
      return rejectWithValue(error);
    }
  },
);

export const logout = createAsyncThunk<void, undefined, AsyncThunkOptions>(
  'userData/logout',
  async (_, { dispatch, extra: apiService, rejectWithValue }) => {
    try {
      await apiService.delete(getApiRoute.logout());
      dispatch(setAuthorizationStatus(AuthorizationStatus.NO_AUTH));
      return dropToken();
    } catch (error) {
      errorHandler(error);
      return rejectWithValue(error);
    }
  },
);
