import { createAsyncThunk } from '@reduxjs/toolkit';

import { Reducer } from '~/constants';
import { errorHandler } from '~/services';
import { ThunkOptions, Offer, OfferServer } from '~/types';

export const fetchAllOffers = createAsyncThunk<
  OfferServer[],
  undefined,
  ThunkOptions
>(
  `${Reducer.Offers}/fetchAllOffers`,
  async (_, { extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.get<OfferServer[]>(`/hotels`);
      return data;
    } catch (error) {
      errorHandler(error as Error);
      return rejectWithValue(error as Error);
    }
  },
);

export const fetchFavoriteOffers = createAsyncThunk<
  Offer[],
  undefined,
  ThunkOptions
>(
  `${Reducer.Offers}/fetchFavoriteOffers`,
  async (_, { extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.get<OfferServer[]>(`/favorite`);
      return data;
    } catch (error) {
      errorHandler(error as Error);
      return rejectWithValue(error as Error);
    }
  },
);

export const fetchOffersNearby = createAsyncThunk<
  Offer[],
  number,
  ThunkOptions
>(
  `${Reducer.Offers}/fetchOffersNearby`,
  async (id, { extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.get<OfferServer[]>(
        `/hotels/${id}/nearby`,
      );
      return data;
    } catch (error) {
      errorHandler(error as Error);
      return rejectWithValue(error as Error);
    }
  },
);
