import { createAsyncThunk } from '@reduxjs/toolkit';
import { StatusCodes } from 'http-status-codes';

import {
  ApiError,
  apiService,
  AuthData,
  isApiError,
} from '~/shared/services/api';
import { Hotel } from '~/shared/types/hotel';
import { User } from '~/shared/types/user';

import { notify } from './actions';

type ThunkOptions = {
  state: RootState;
  dispatch: AppDispatch;
  rejectValue: ApiError;
};

export const checkAuthStatus = createAsyncThunk<User, undefined, ThunkOptions>(
  'user/checkAuthStatus',
  async (_, thunkApi) => {
    try {
      const user = await apiService.checkAuthStatus();
      return user;
    } catch (error) {
      if (isApiError(error)) {
        if (error.statusCode === StatusCodes.UNAUTHORIZED) {
          const { message } = error;
          thunkApi.dispatch(notify({ type: 'info', message }));
        }

        return thunkApi.rejectWithValue(error);
      }

      throw error;
    }
  },
);

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
