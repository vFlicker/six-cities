import { createAsyncThunk } from '@reduxjs/toolkit';

import { Reducer } from '~/constants';
import { errorHandler } from '~/services';
import { ThunkOptions, Offer, OfferServer } from '~/types';

export const fetchOffers = createAsyncThunk<
  OfferServer[],
  undefined,
  ThunkOptions
>(
  `${Reducer.Offers}/fetchAll`,
  async (_, { extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.get<OfferServer[]>(`/hotels`);
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
  ThunkOptions
>(
  `${Reducer.Offers}/fetchFavorites`,
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
  ThunkOptions
>(
  `${Reducer.Offers}/fetchNearby`,
  async (id, { extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.get<OfferServer[]>(
        `/hotels/${id}/nearby`,
      );
      return data;
    } catch (error) {
      errorHandler(error);
      return rejectWithValue(error);
    }
  },
);
