import { createAsyncThunk } from '@reduxjs/toolkit';

import { FavoriteStatus, Reducer } from '~/constants';
import { errorHandler } from '~/services';
import { Offer, OfferID, OfferServer, ThunkOptions } from '~/types';

import { fetchFavoriteOffers, fetchOffers } from '../slices/offers';
import { checkAuthStatus, selectIsUserAuthorized } from '../slices/user';

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
      const isUserAuthorized = selectIsUserAuthorized(state);

      if (isUserAuthorized) {
        await dispatch(fetchFavoriteOffers());
      }
    } catch (error) {
      errorHandler(error);
      return rejectWithValue(error);
    }
  },
);

type ToggleFavoritePayload = {
  id: OfferID;
  status: FavoriteStatus;
};

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
      errorHandler(error);
      return rejectWithValue(error);
    }
  },
);
