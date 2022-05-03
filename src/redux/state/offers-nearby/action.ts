import { createAsyncThunk } from '@reduxjs/toolkit';

import { Adapter, ApiError } from '@/services';
import { Offer, OfferServer } from '@/types';
import { getApiRoute } from '@/utils';
import { AsyncThunkOptions } from '../types';

const ACTION_TYPE = '@@offerNearby';

export const fetchOfferNearby = createAsyncThunk<Offer[], number, AsyncThunkOptions>(
  ACTION_TYPE,
  async (id, { extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.get<OfferServer[]>(getApiRoute.offersNearby(id));

      return data.map(Adapter.transformOffer);
    } catch (error) {
      return rejectWithValue(error as ApiError);
    }
  },
);
