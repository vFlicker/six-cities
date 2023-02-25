import { createAsyncThunk } from '@reduxjs/toolkit';

import { ApiError, apiService, AuthData, isApiError } from './api';
import { User } from './types';

type ThunkOptions = {
  state: RootState;
  dispatch: AppDispatch;
  rejectValue: ApiError;
};

export const login = createAsyncThunk<User, AuthData, ThunkOptions>(
  'user/login',
  async (data, thunkApi) => {
    try {
      const user = await apiService.login(data);
      return user;
    } catch (error) {
      if (isApiError(error)) return thunkApi.rejectWithValue(error);
      throw error;
    }
  },
);

export const signOut = createAsyncThunk<void, undefined, ThunkOptions>(
  'user/signOut',
  async (_, thunkApi) => {
    try {
      await apiService.signOut();
    } catch (error) {
      if (isApiError(error)) return thunkApi.rejectWithValue(error);
      throw error;
    }
  },
);
