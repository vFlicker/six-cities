import { createAsyncThunk } from '@reduxjs/toolkit';

import { Adapter, ApiError } from '@/services';
import { Offer, OfferServer } from '@/types';
import { getApiRoute } from '@/utils';

import { AsyncThunkOptions } from '../types';

const ACTION_TYPE = 'offersFavorite';

export const fetchOffersFavorite = createAsyncThunk<Offer[], void, AsyncThunkOptions>(
  ACTION_TYPE,
  async (_, { extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.get<OfferServer[]>(getApiRoute.favorite());

      return data.map(Adapter.transformOffer);
    } catch (error) {
      return rejectWithValue(error as ApiError);
    }
  },
);
