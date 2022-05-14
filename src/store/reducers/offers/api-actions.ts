import { createAsyncThunk } from '@reduxjs/toolkit';

import { Adapter, errorHandler } from '@/services';
import { Offers, OfferServer } from '@/types';
import { getApiRoute } from '@/utils';

import { AsyncThunkOptions } from '../types';
import { transformOffers } from './utils';

export const fetchOffers = createAsyncThunk<Offers, undefined, AsyncThunkOptions>(
  'offers',
  async (_, { extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.get<OfferServer[]>(getApiRoute.offers());
      const offers = data.map(Adapter.offerFormServerToClient);

      return transformOffers(offers);
    } catch (error) {
      errorHandler(error);
      return rejectWithValue(error);
    }
  },
);
