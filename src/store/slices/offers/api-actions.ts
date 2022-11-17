import { createAsyncThunk } from '@reduxjs/toolkit';

import { errorHandler } from '~/services';
import { AsyncThunkOptions, Offer, OfferServer } from '~/types';

type changeFavoriteStatusPayload = {
  id: number;
  status: 0 | 1;
};

export const fetchOffers = createAsyncThunk<
  OfferServer[],
  undefined,
  AsyncThunkOptions
>('offers/fetchAll', async (_, { extra: apiService, rejectWithValue }) => {
  try {
    const { data } = await apiService.get<OfferServer[]>(`/hotels`);
    return data;
  } catch (error) {
    errorHandler(error);
    return rejectWithValue(error);
  }
});

export const fetchFavoriteOffers = createAsyncThunk<
  Offer[],
  undefined,
  AsyncThunkOptions
>(
  'offers/fetchFavorites',
  async (_, { extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.get<OfferServer[]>(`/favorite`);
      return data;
    } catch (error) {
      errorHandler(error);
      return rejectWithValue(error);
    }
  },
);

export const fetchOffersNearby = createAsyncThunk<
  Offer[],
  number,
  AsyncThunkOptions
>('offers/fetchNearby', async (id, { extra: apiService, rejectWithValue }) => {
  try {
    const { data } = await apiService.get<OfferServer[]>(
      `/hotels/${id}/nearby`,
    );
    return data;
  } catch (error) {
    errorHandler(error);
    return rejectWithValue(error);
  }
});

export const changeFavoriteStatus = createAsyncThunk<
  Offer,
  changeFavoriteStatusPayload,
  AsyncThunkOptions
>(
  'offers/changeFavoriteStatus',
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
