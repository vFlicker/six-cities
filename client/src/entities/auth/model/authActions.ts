import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { AppRoute } from '~/shared/libs/router';
import { StoreSlice, ThunkOptions } from '~/shared/libs/state';
import { saveToken } from '~/shared/libs/token';

import { authApi } from '../api/authApi';
import { AuthData, RegisterData } from '../types/authTypes';

export const REDIRECT_TO_ROUTE = `${StoreSlice.Auth}/redirectToRoute`;

export const redirectToRoute = createAction<AppRoute>(
  `${StoreSlice.Auth}/redirectToRoute`,
);

export const login = createAsyncThunk<void, AuthData, ThunkOptions>(
  `${StoreSlice.Auth}/login`,
  async (data, { dispatch }) => {
    const { token } = await authApi.login(data);
    saveToken(token);
    dispatch(redirectToRoute(AppRoute.Root));
  },
);

export const checkAuthStatus = createAsyncThunk<void, void, ThunkOptions>(
  `${StoreSlice.Auth}/checkAuthStatus`,
  async () => {
    await authApi.checkAuthStatus();
  },
);

export const register = createAsyncThunk<void, RegisterData, ThunkOptions>(
  `${StoreSlice.Auth}/register`,
  async (data) => {
    const { token } = await authApi.register(data);
    saveToken(token);
  },
);
