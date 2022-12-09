import { createAsyncThunk } from '@reduxjs/toolkit';

import { FavoriteStatus, Reducer } from '~/constants';
import { errorHandler } from '~/services';
import { Offer, OfferID, OfferServer, ThunkOptions } from '~/types';

import { fetchFavoriteOffers, fetchAllOffers } from '../slices/offers';
import { checkAuthStatus, selectIsUserAuthorized } from '../slices/user';

type ToggleFavoritePayload = {
  id: OfferID;
  status: FavoriteStatus;
};

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
    } catch (error) {
      errorHandler(error as Error);
      return rejectWithValue(error as Error);
    }
  },
);

export const toggleFavorite = createAsyncThunk<
  Offer,
  ToggleFavoritePayload,
  ThunkOptions
>(
  `${Reducer.App}/toggleFavoriteStatus`,
  async ({ id, status }, { extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.post<OfferServer>(
        `/favorite/${id}/${status}`,
      );

      return data;
    } catch (error) {
      errorHandler(error as Error);
      return rejectWithValue(error as Error);
    }
  },
);
