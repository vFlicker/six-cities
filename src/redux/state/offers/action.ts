import { createAsyncThunk } from '@reduxjs/toolkit';

import { Adapter, ApiError } from '@/services';

import { GroupedOffers, OfferServer } from '@/types';
import { getApiRoute } from '@/utils';

import { AsyncThunkOptions } from '../types';
import { getGroupedOffers } from './utils';

const ACTION_TYPE = 'offers';

export const fetchOffers = createAsyncThunk<GroupedOffers, void, AsyncThunkOptions>(
  ACTION_TYPE,
  async (_, { extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.get<OfferServer[]>(getApiRoute.offers());
      const transformedData = data.map(Adapter.transformOffer);

      return getGroupedOffers(transformedData);
    } catch (error) {
      return rejectWithValue(error as ApiError);
    }
  },
);
