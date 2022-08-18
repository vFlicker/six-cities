import { createAsyncThunk } from '@reduxjs/toolkit';

import { errorHandler } from '@/services';
import { Offer, OfferServer } from '@/types';
import { apiRoute } from '@/utils';

import { AsyncThunkOptions } from '../types';

export const fetchOfferNearby = createAsyncThunk<
  Offer[],
  number,
  AsyncThunkOptions
>('offerNearby', async (id, { extra: apiService, rejectWithValue }) => {
  try {
    const { data } = await apiService.get<OfferServer[]>(
      apiRoute.getOffersNearby(id),
    );
    return data;
  } catch (error) {
    errorHandler(error);
    return rejectWithValue(error);
  }
});
