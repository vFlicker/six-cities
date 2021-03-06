import { createAsyncThunk } from '@reduxjs/toolkit';

import { errorHandler } from '@/services';
import { Offer, OfferServer } from '@/types';
import { getApiRoute } from '@/utils';

import { AsyncThunkOptions } from '../types';

export const fetchOfferNearby = createAsyncThunk<Offer[], number, AsyncThunkOptions>(
  'offerNearby',
  async (id, { extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.get<OfferServer[]>(getApiRoute.offersNearby(id));
      return data;
    } catch (error) {
      errorHandler(error);
      return rejectWithValue(error);
    }
  },
);
