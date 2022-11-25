import { createAsyncThunk } from '@reduxjs/toolkit';

import { Reducer } from '~/constants';
import { errorHandler } from '~/services';
import { ThunkOptions } from '~/types';

import { fetchFavoriteOffers } from '../slices/offers';
import { checkAuthStatus, selectAuthStatus } from '../slices/user';

/**
 * Thunk that call thunks for init application.
 */
export const initializeApp = createAsyncThunk<void, undefined, ThunkOptions>(
  `${Reducer.App}/initialize`,
  async (_, { getState, dispatch, rejectWithValue }) => {
    try {
      await dispatch(checkAuthStatus());

      const state = getState();
      const authStatus = selectAuthStatus(state);

      if (authStatus) {
        await dispatch(fetchFavoriteOffers());
      }
    } catch (error) {
      errorHandler(error);
      return rejectWithValue(error);
    }
  },
);
