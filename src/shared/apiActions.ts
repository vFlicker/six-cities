import { createAsyncThunk } from '@reduxjs/toolkit';

import { Hotel } from '~/shared/types/hotel';
import { User } from '~/shared/types/user';

import { ApiError, apiService, AuthData, isApiError } from './api';

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

export const fetchAllHotels = createAsyncThunk<
  Hotel[],
  undefined,
  ThunkOptions
>('hotels/fetchAllHotels', async (_, thunkApi) => {
  try {
    const hotels = await apiService.getAllHotels();
    return hotels;
  } catch (error) {
    if (isApiError(error)) return thunkApi.rejectWithValue(error);
    throw error;
  }
});
