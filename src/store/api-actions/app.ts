import { createAsyncThunk } from '@reduxjs/toolkit';
import { Reducer } from '~/constants';

import { errorHandler } from '~/services';
import { ThunkOptions } from '~/types';

import { checkAuthStatus } from '../slices/user';

/**
 * Thunk that call thunks for init application.
 */
export const initializeApp = createAsyncThunk<void, undefined, ThunkOptions>(
  `${Reducer.App}/initialize`,
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const authUserPromise = dispatch(checkAuthStatus());
      await Promise.all([authUserPromise]);
    } catch (error) {
      errorHandler(error);
      return rejectWithValue(error);
    }
  },
);
