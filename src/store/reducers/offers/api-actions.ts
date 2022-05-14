import { createAsyncThunk } from '@reduxjs/toolkit';

import { Adapter, ApiError } from '@/services';

import { Offers, OfferServer } from '@/types';
import { getApiRoute } from '@/utils';

import { AsyncThunkOptions } from '../types';
import { transformOffers } from './utils';

export const fetchOffers = createAsyncThunk<Offers, void, AsyncThunkOptions>(
  'offers',
  async (_, { extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.get<OfferServer[]>(getApiRoute.offers());
      const offers = data.map(Adapter.offerFormServerToClient);

      return transformOffers(offers);
    } catch (error) {
      return rejectWithValue(error as ApiError);
    }
  },
);
