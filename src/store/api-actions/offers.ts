import { createAsyncThunk } from '@reduxjs/toolkit';

import { Reducer } from '~/constants';
import { apiService } from '~/services';
import { ThunkOptions, Offer } from '~/types';
import { errorHandler } from '~/utils';

export const fetchAllOffers = createAsyncThunk<
  Offer[],
  undefined,
  ThunkOptions
>(`${Reducer.Offers}/fetchAllOffers`, async (_, { rejectWithValue }) => {
  try {
    const offers = await apiService.findAllOffers();
    return offers;
  } catch (error) {
    return rejectWithValue(errorHandler(error as Error));
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
    return rejectWithValue(errorHandler(error as Error));
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
    return rejectWithValue(errorHandler(error as Error));
  }
});
