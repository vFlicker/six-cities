import { createAsyncThunk } from '@reduxjs/toolkit';

import { AppRoute, Reducer } from '~/constants';
import { ThunkOptions, User } from '~/types';
import { token, errorHandler } from '~/services';

import { redirectToRoute } from '../slices/app';

export type AuthData = {
  email: string;
  password: string;
};

export const checkAuthStatus = createAsyncThunk<User, undefined, ThunkOptions>(
  `${Reducer.User}/authStatus`,
  async (_, { extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.get<User>(`/login`);
      return data;
    } catch (error) {
      errorHandler(error as Error);
      return rejectWithValue(error as Error);
    }
  },
);

export const login = createAsyncThunk<User, AuthData, ThunkOptions>(
  `${Reducer.User}/login`,
  async (authData, { dispatch, extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.post<User>(`/login`, authData);
      token.saveToken(data.token);
      dispatch(redirectToRoute(AppRoute.Root));
      return data;
    } catch (error) {
      errorHandler(error as Error);
      return rejectWithValue(error as Error);
    }
  },
);

export const logout = createAsyncThunk<void, undefined, ThunkOptions>(
  `${Reducer.User}/logout`,
  async (_, { extra: apiService, rejectWithValue }) => {
    try {
      await apiService.delete<void>(`logout`);
      return token.dropToken();
    } catch (error) {
      errorHandler(error as Error);
      return rejectWithValue(error as Error);
    }
  },
);
