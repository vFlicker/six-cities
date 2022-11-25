import { createAsyncThunk } from '@reduxjs/toolkit';

import { Reducer } from '~/constants';
import { errorHandler } from '~/services';
import { ThunkOptions } from '~/types';

import { fetchFavoriteOffers, fetchOffers } from '../slices/offers';
import {
  checkAuthStatus,
  isUserAuthorized,
  selectAuthStatus,
} from '../slices/user';

/**
 * Thunk that call thunks for init application.
 */
export const initializeApp = createAsyncThunk<void, undefined, ThunkOptions>(
  `${Reducer.App}/initialize`,
  async (_, { getState, dispatch, rejectWithValue }) => {
    try {
      const checkAuthStatusPromise = dispatch(checkAuthStatus());
      const fetchOffersPromise = dispatch(fetchOffers());

      await Promise.all([checkAuthStatusPromise, fetchOffersPromise]);

      const state = getState();
      const authStatus = selectAuthStatus(state);

      if (isUserAuthorized(authStatus)) {
        await dispatch(fetchFavoriteOffers());
      }
    } catch (error) {
      errorHandler(error);
      return rejectWithValue(error);
    }
  },
);
