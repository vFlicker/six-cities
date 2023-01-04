import { createAsyncThunk } from '@reduxjs/toolkit';

import { AppRoute, Reducer } from '~/constants';
import { AuthData, ThunkOptions, User } from '~/types';
import { authApiService, dropToken, saveToken } from '~/services';
import { errorHandler } from '~/utils';

import { redirectToRoute } from '../actions/app';

export const checkAuthStatus = createAsyncThunk<User, undefined, ThunkOptions>(
  `${Reducer.User}/authStatus`,
  async (_, { rejectWithValue }) => {
    try {
      const user = await authApiService.checkStatus();
      return user;
    } catch (error) {
      return rejectWithValue(errorHandler(error as Error));
    }
  },
);

export const login = createAsyncThunk<User, AuthData, ThunkOptions>(
  `${Reducer.User}/login`,
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const user = await authApiService.login(data);

      saveToken(user.token);

      dispatch(redirectToRoute(AppRoute.Root));

      return user;
    } catch (error) {
      return rejectWithValue(errorHandler(error as Error));
    }
  },
);

export const logout = createAsyncThunk<void, undefined, ThunkOptions>(
  `${Reducer.User}/logout`,
  async (_, { rejectWithValue }) => {
    try {
      await authApiService.logout();

      return dropToken();
    } catch (error) {
      return rejectWithValue(errorHandler(error as Error));
    }
  },
);
