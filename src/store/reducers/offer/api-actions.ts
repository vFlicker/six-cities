import { createAsyncThunk } from '@reduxjs/toolkit';

import { errorHandler } from '~/services';
import { Offer, OfferServer } from '~/types';

import { AsyncThunkOptions } from '../types';

type changeFavoriteStatusPayload = {
  id: number;
  status: 0 | 1;
};

export const fetchOffers = createAsyncThunk<
  OfferServer[],
  undefined,
  AsyncThunkOptions
>('offer/fetchAll', async (_, { extra: apiService, rejectWithValue }) => {
  try {
    const { data } = await apiService.get<OfferServer[]>(`/hotels`);
    return data;
  } catch (error) {
    errorHandler(error);
    return rejectWithValue(error);
  }
});

export const fetchOffer = createAsyncThunk<Offer, number, AsyncThunkOptions>(
  'offer/fetchOne',
  async (id, { extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.get<OfferServer>(`/hotels/${id}`);
      return data;
    } catch (error) {
      errorHandler(error);
      return rejectWithValue(error);
    }
  },
);

export const fetchFavoriteOffers = createAsyncThunk<
  Offer[],
  undefined,
  AsyncThunkOptions
>('offer/fetchFavorites', async (_, { extra: apiService, rejectWithValue }) => {
  try {
    const { data } = await apiService.get<OfferServer[]>(`/favorite`);
    return data;
  } catch (error) {
    errorHandler(error);
    return rejectWithValue(error);
  }
});

export const fetchOffersNearby = createAsyncThunk<
  Offer[],
  number,
  AsyncThunkOptions
>('offer/fetchNearby', async (id, { extra: apiService, rejectWithValue }) => {
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
  'offer/changeFavoriteStatus',
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
