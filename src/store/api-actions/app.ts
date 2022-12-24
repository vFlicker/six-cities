import { createAsyncThunk } from '@reduxjs/toolkit';

import { Reducer } from '~/constants';
import { errorHandler, favoriteApiService } from '~/services';
import { Offer, ThunkOptions, ToggleFavoritePayload } from '~/types';

import { fetchFavoriteOffers, fetchAllOffers } from '../slices/offers';
import { checkAuthStatus, selectIsUserAuthorized } from '../slices/user';

/**
 * Thunk that call thunks for init application.
 */
export const initializeApp = createAsyncThunk<void, undefined, ThunkOptions>(
  `${Reducer.App}/initialize`,
  async (_, { getState, dispatch, rejectWithValue }) => {
    try {
      const fetchAllOffersPromise = dispatch(fetchAllOffers());
      const checkAuthStatusPromise = dispatch(checkAuthStatus());

      await Promise.all([checkAuthStatusPromise, fetchAllOffersPromise]);

      const isUserAuthorized = selectIsUserAuthorized(getState());

      if (isUserAuthorized) {
        await dispatch(fetchFavoriteOffers());
      }

      return;
    } catch (err) {
      errorHandler(err as Error);
      return rejectWithValue(err as Error);
    }
  },
);

export const toggleFavorite = createAsyncThunk<
  Offer,
  ToggleFavoritePayload,
  ThunkOptions
>(
  `${Reducer.App}/toggleFavoriteStatus`,
  async ({ id, status }, { rejectWithValue }) => {
    try {
      const hotel = await favoriteApiService.toggleStatus(id, status);
      return hotel;
    } catch (err) {
      errorHandler(err as Error);
      return rejectWithValue(err as Error);
    }
  },
);
