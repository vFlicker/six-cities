import { createAsyncThunk } from '@reduxjs/toolkit';

import { Adapter, ApiError } from '@/services';
import { getApiRoute } from '@/utils';
import { Offer, OfferServer } from '@/types';

import { AsyncThunkOptions } from '../types';

const ACTION_TYPE = 'offer';

export const fetchOffer = createAsyncThunk<Offer, number, AsyncThunkOptions>(
  ACTION_TYPE,
  async (id, { extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.get<OfferServer>(getApiRoute.offer(id));

      return Adapter.offerFormServerToClient(data);
    } catch (error) {
      return rejectWithValue(error as ApiError);
    }
  },
);
