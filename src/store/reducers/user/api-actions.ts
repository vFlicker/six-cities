import { createAsyncThunk } from '@reduxjs/toolkit';

import { AppRoute, AuthorizationStatus } from '@/constants';
import { User } from '@/types';
import { getApiRoute } from '@/utils/get-api-route';
import {
  Adapter,
  dropToken,
  saveToken,
  errorHandler,
} from '@/services';

import { AsyncThunkOptions } from '../types';
import { redirectToRoute } from './actions';
import { setAuthorizationStatus } from './slice';

type AuthData = {
  email: string;
  password: string;
};

export const checkAuthStatus = createAsyncThunk<User, undefined, AsyncThunkOptions>(
  'userData/authStatus',
  async (_, { extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.get<User>(getApiRoute.login());
      setAuthorizationStatus(AuthorizationStatus.AUTH);
      return Adapter.userFormServerToClient(data);
    } catch (error) {
      setAuthorizationStatus(AuthorizationStatus.NO_AUTH);
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
      const transformedData = Adapter.userFormServerToClient(data);
      const { token } = data;

      saveToken(token);
      setAuthorizationStatus(AuthorizationStatus.AUTH);
      dispatch(redirectToRoute(AppRoute.ROOT));

      return transformedData;
    } catch (error) {
      setAuthorizationStatus(AuthorizationStatus.NO_AUTH);
      errorHandler(error);
      return rejectWithValue(error);
    }
  },
);

export const logout = createAsyncThunk<void, undefined, AsyncThunkOptions>(
  'userData/logout',
  async (_, { extra: apiService, rejectWithValue }) => {
    try {
      await apiService.delete(getApiRoute.logout());
      setAuthorizationStatus(AuthorizationStatus.NO_AUTH);
      return dropToken();
    } catch (error) {
      errorHandler(error);
      return rejectWithValue(error);
    }
  },
);
