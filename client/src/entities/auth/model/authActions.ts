import { createAsyncThunk } from '@reduxjs/toolkit';

import { StoreSlice } from '~/shared/libs/state';
import { ThunkOptions } from '~/shared/libs/state';
import { saveToken } from '~/shared/libs/token';

import { authApi } from '../api/authApi';
import { AuthData, RegisterData } from '../types/authTypes';

export const login = createAsyncThunk<void, AuthData, ThunkOptions>(
  `${StoreSlice.Auth}/login`,
  async (data) => {
    const { token } = await authApi.login(data);
    saveToken(token);
  },
);

export const register = createAsyncThunk<void, RegisterData, ThunkOptions>(
  `${StoreSlice.Auth}/register`,
  async (data) => {
    const { token } = await authApi.register(data);
    saveToken(token);
  },
);
