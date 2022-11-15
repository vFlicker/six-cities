import { createAsyncThunk } from '@reduxjs/toolkit';

import { AppRoute, AuthStatus } from '~/constants';
import { User } from '~/types';
import { dropToken, saveToken, errorHandler } from '~/services';

import { AsyncThunkOptions } from '../types';
import { redirectToRoute, setAuthStatus } from './slice';

type AuthData = {
  email: string;
  password: string;
};

export const checkAuthStatus = createAsyncThunk<
  User,
  undefined,
  AsyncThunkOptions
>(
  'userData/authStatus',
  async (_, { dispatch, extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.get<User>(`/login`);
      dispatch(setAuthStatus(AuthStatus.Auth));
      return data;
    } catch (error) {
      dispatch(setAuthStatus(AuthStatus.NoAuth));
      errorHandler(error);
      return rejectWithValue(error);
    }
  },
);

export const login = createAsyncThunk<User, AuthData, AsyncThunkOptions>(
  'userData/login',
  async (authData, { dispatch, extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.post<User>(`/login`, authData);
      saveToken(data.token);
      dispatch(setAuthStatus(AuthStatus.Auth));
      dispatch(redirectToRoute(AppRoute.Root));
      return data;
    } catch (error) {
      dispatch(setAuthStatus(AuthStatus.NoAuth));
      errorHandler(error);
      return rejectWithValue(error);
    }
  },
);

export const logout = createAsyncThunk<void, undefined, AsyncThunkOptions>(
  'userData/logout',
  async (_, { dispatch, extra: apiService, rejectWithValue }) => {
    try {
      await apiService.delete<void>(`logout`);
      dispatch(setAuthStatus(AuthStatus.NoAuth));
      return dropToken();
    } catch (error) {
      errorHandler(error);
      return rejectWithValue(error);
    }
  },
);
