import { createAsyncThunk } from '@reduxjs/toolkit';

import { Reducer } from '~/constants';
import { ApiError } from '~/services/api/api-error';
import * as apiService from '~/services/api/api-service';
import { Offer } from '~/types/offer';
import { ThunkOptions } from '~/types/store';

export const fetchAllOffers = createAsyncThunk<
  Offer[],
  undefined,
  ThunkOptions
>(`${Reducer.Offers}/fetchAllOffers`, async (_, { rejectWithValue }) => {
  try {
    const offers = await apiService.findAllOffers();
    return offers;
  } catch (error) {
    if (error instanceof ApiError) {
      return rejectWithValue({
        message: error.message,
        statusCode: error.status,
      });
    }

    throw error;
  }
});

export const fetchFavoriteOffers = createAsyncThunk<
  Offer[],
  undefined,
  ThunkOptions
>(`${Reducer.Offers}/fetchFavoriteOffers`, async (_, { rejectWithValue }) => {
  try {
    const favoriteOffers = await apiService.findFavoriteOffers();
    return favoriteOffers;
  } catch (error) {
    if (error instanceof ApiError) {
      return rejectWithValue({
        message: error.message,
        statusCode: error.status,
      });
    }

    throw error;
  }
});

export const fetchOffersNearby = createAsyncThunk<
  Offer[],
  number,
  ThunkOptions
>(`${Reducer.Offers}/fetchOffersNearby`, async (id, { rejectWithValue }) => {
  try {
    const offersNearby = await apiService.findOffersNearby(id);
    return offersNearby;
  } catch (error) {
    if (error instanceof ApiError) {
      return rejectWithValue({
        message: error.message,
        statusCode: error.status,
      });
    }

    throw error;
  }
});
