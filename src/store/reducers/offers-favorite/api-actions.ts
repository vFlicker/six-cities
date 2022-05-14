import { createAsyncThunk } from '@reduxjs/toolkit';

import { Adapter, errorHandler } from '@/services';
import { Offer, OfferServer } from '@/types';
import { getApiRoute } from '@/utils';

import { AsyncThunkOptions } from '../types';

export const fetchOffersFavorite = createAsyncThunk<Offer[], undefined, AsyncThunkOptions>(
  'offersFavorite',
  async (_, { extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.get<OfferServer[]>(getApiRoute.favorite());

      return data.map(Adapter.offerFormServerToClient);
    } catch (error) {
      errorHandler(error);
      return rejectWithValue(error);
    }
  },
);
