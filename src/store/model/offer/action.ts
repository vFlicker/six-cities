import { createAsyncThunk } from '@reduxjs/toolkit';

import ApiError from '../../../errors';
import { Adapter } from '../../../services';
import { AsyncThunkOptions } from '../../../types/action';
import { TOffer, TOfferServer } from '../../../types/offer';
import { getApiRoute } from '../../../utils/api-route';

export const fetchOffer = createAsyncThunk<TOffer, number, AsyncThunkOptions>(
  'offer',
  async (id, { extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.get<TOfferServer>(getApiRoute.offer(id));

      return Adapter.transformOffer(data);
    } catch (error) {
      return rejectWithValue(error as ApiError);
    }
  },
);
