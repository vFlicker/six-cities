import { createAsyncThunk } from '@reduxjs/toolkit';

import { Reducer } from '~/constants';
import { errorHandler, favoriteApiService, hotelApiService } from '~/services';
import { ThunkOptions, Offer } from '~/types';

export const fetchAllOffers = createAsyncThunk<
  Offer[],
  undefined,
  ThunkOptions
>(`${Reducer.Offers}/fetchAllOffers`, async (_, { rejectWithValue }) => {
  try {
    const hotels = await hotelApiService.findAll();
    return hotels;
  } catch (err) {
    errorHandler(err as Error);
    return rejectWithValue(err as Error);
  }
});

export const fetchFavoriteOffers = createAsyncThunk<
  Offer[],
  undefined,
  ThunkOptions
>(`${Reducer.Offers}/fetchFavoriteOffers`, async (_, { rejectWithValue }) => {
  try {
    const favoriteHotels = await favoriteApiService.findAll();
    return favoriteHotels;
  } catch (err) {
    errorHandler(err as Error);
    return rejectWithValue(err as Error);
  }
});

export const fetchOffersNearby = createAsyncThunk<
  Offer[],
  number,
  ThunkOptions
>(`${Reducer.Offers}/fetchOffersNearby`, async (id, { rejectWithValue }) => {
  try {
    const hotelsNearby = await hotelApiService.findAllNearby(id);
    return hotelsNearby;
  } catch (err) {
    errorHandler(err as Error);
    return rejectWithValue(err as Error);
  }
});
