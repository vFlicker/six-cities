import { createAsyncThunk } from '@reduxjs/toolkit';

import { errorHandler } from '@/services';
import { getApiRoute } from '@/utils';
import { Offer, OfferServer } from '@/types';

import { AsyncThunkOptions } from '../types';

export const fetchOffer = createAsyncThunk<Offer, number, AsyncThunkOptions>(
  'offer',
  async (id, { extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.get<OfferServer>(getApiRoute.offer(id));
      return data;
    } catch (error) {
      errorHandler(error);
      return rejectWithValue(error);
    }
  },
);
