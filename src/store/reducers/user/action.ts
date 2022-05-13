import { createAsyncThunk } from '@reduxjs/toolkit';

import { AppRoute } from '@/constants';
import { User } from '@/types';
import { getApiRoute } from '@/utils/get-api-route';
import {
  Adapter,
  dropToken,
  saveToken,
  ApiError,
} from '@/services';

import { AsyncThunkOptions } from '../types';
import { redirectToRoute } from './actions';

export type AuthData = {
  email: string;
  password: string;
};

export const checkAuthStatus = createAsyncThunk<User, void, AsyncThunkOptions>(
  'userData/authStatus',
  async (_, { extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.get<User>(getApiRoute.login());
      return Adapter.userFormServerToClient(data);
    } catch (error) {
      // TODO: add toast info
      return rejectWithValue(error as ApiError);
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
      dispatch(redirectToRoute(AppRoute.ROOT));

      return transformedData;
    } catch (error) {
      return rejectWithValue(error as ApiError);
    }
  },
);

export const logout = createAsyncThunk<void, void, AsyncThunkOptions>(
  'userData/logout',
  async (_, { extra: apiService, rejectWithValue }) => {
    try {
      await apiService.delete(getApiRoute.logout());

      return dropToken();
    } catch (error) {
      return rejectWithValue(error as ApiError);
    }
  },
);
