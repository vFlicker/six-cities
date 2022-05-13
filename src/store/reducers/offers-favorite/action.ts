import { createAsyncThunk } from '@reduxjs/toolkit';

import { Adapter, ApiError } from '@/services';
import { Offer, OfferServer } from '@/types';
import { getApiRoute } from '@/utils';

import { AsyncThunkOptions } from '../types';

export const fetchOffersFavorite = createAsyncThunk<Offer[], void, AsyncThunkOptions>(
  'offersFavorite',
  async (_, { extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.get<OfferServer[]>(getApiRoute.favorite());

      return data.map(Adapter.offerFormServerToClient);
    } catch (error) {
      return rejectWithValue(error as ApiError);
    }
  },
);
