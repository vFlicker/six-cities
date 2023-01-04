import { createAsyncThunk } from '@reduxjs/toolkit';

import { Reducer } from '~/constants';
import { ApiError, apiService } from '~/services';
import { ThunkOptions, Offer } from '~/types';

export const fetchAllOffers = createAsyncThunk<
  Offer[],
  undefined,
  ThunkOptions
>(`${Reducer.Offers}/fetchAllOffers`, async (_, { rejectWithValue }) => {
  try {
    const offers = await apiService.findAllOffers();
    return offers;
  } catch (error) {
    if (error instanceof ApiError) return rejectWithValue(error);
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
    if (error instanceof ApiError) return rejectWithValue(error);
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
    if (error instanceof ApiError) return rejectWithValue(error);
    throw error;
  }
});
