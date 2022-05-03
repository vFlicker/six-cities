import { createAsyncThunk } from '@reduxjs/toolkit';

import ApiError from '../../../errors';
import { Adapter } from '../../../services';
import { AsyncThunkOptions } from '../../../types/action';
import { TOffers, TOffersServer } from '../../../types/offer';
import { getApiRoute } from '../../../utils/api-route';

export const fetchOfferNearby = createAsyncThunk<TOffers, number, AsyncThunkOptions>(
  'offerNearby',
  async (id, { extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.get<TOffersServer>(getApiRoute.offersNearby(id));

      return data.map(Adapter.transformOffer);
    } catch (error) {
      return rejectWithValue(error as ApiError);
    }
  },
);
