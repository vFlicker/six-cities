import { createAsyncThunk } from '@reduxjs/toolkit';

import { AppRoute, Reducer } from '~/constants';
import { AuthData, ThunkOptions, User } from '~/types';
import * as apiService from '~/services/api/api-service';
import { ApiError } from '~/services/api/api-error';
import { dropToken, saveToken } from '~/services/token';

import { redirectToRoute } from '../actions/app';

export const checkAuthStatus = createAsyncThunk<User, undefined, ThunkOptions>(
  `${Reducer.User}/checkAuthStatus`,
  async (_, { rejectWithValue }) => {
    try {
      const user = await apiService.checkAuthStatus();
      return user;
    } catch (error) {
      if (error instanceof ApiError) {
        return rejectWithValue({
          message: error.message,
          statusCode: error.status,
        });
      }

      throw error;
    }
  },
);

export const login = createAsyncThunk<User, AuthData, ThunkOptions>(
  `${Reducer.User}/login`,
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const user = await apiService.login(data);

      saveToken(user.token);

      dispatch(redirectToRoute(AppRoute.Root));

      return user;
    } catch (error) {
      if (error instanceof ApiError) {
        return rejectWithValue({
          message: error.message,
          statusCode: error.status,
        });
      }

      throw error;
    }
  },
);

export const logout = createAsyncThunk<void, undefined, ThunkOptions>(
  `${Reducer.User}/logout`,
  async (_, { rejectWithValue }) => {
    try {
      await apiService.logout();

      return dropToken();
    } catch (error) {
      if (error instanceof ApiError) {
        return rejectWithValue({
          message: error.message,
          statusCode: error.status,
        });
      }

      throw error;
    }
  },
);
