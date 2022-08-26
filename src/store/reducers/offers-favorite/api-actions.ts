import { createAsyncThunk } from '@reduxjs/toolkit';

import { errorHandler } from '~/services';
import { Offer, OfferServer } from '~/types';

import { AsyncThunkOptions } from '../types';

export const fetchOffersFavorite = createAsyncThunk<
  Offer[],
  undefined,
  AsyncThunkOptions
>('offersFavorite', async (_, { extra: apiService, rejectWithValue }) => {
  try {
    const { data } = await apiService.get<OfferServer[]>(`/favorite`);
    return data;
  } catch (error) {
    errorHandler(error);
    return rejectWithValue(error);
  }
});
