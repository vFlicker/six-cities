import { createAsyncThunk } from '@reduxjs/toolkit';

import { errorHandler } from '~/services';
import { OfferServer } from '~/types';
import { apiRoute } from '~/utils';

import { AsyncThunkOptions } from '../types';

export const fetchOffers = createAsyncThunk<
  OfferServer[],
  undefined,
  AsyncThunkOptions
>('offers', async (_, { extra: apiService, rejectWithValue }) => {
  try {
    const { data } = await apiService.get<OfferServer[]>(apiRoute.getOffers());
    return data;
  } catch (error) {
    errorHandler(error);
    return rejectWithValue(error);
  }
});
