import { createAsyncThunk } from '@reduxjs/toolkit';

import { APIRoute } from '../../../const';
import ApiError from '../../../errors';
import Adapter from '../../../services/adapter';
import { AsyncThunkOptions } from '../../../types/action';
import { TGroupedOffers, TOffersServer } from '../../../types/offer';
import { getGroupedOffers } from '../../../utils/offers';

export const fetchOffers = createAsyncThunk<TGroupedOffers, void, AsyncThunkOptions>(
  'offers',
  async (_, { extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.get<TOffersServer>(`${APIRoute.Offers}`);
      const transformedData = data.map(Adapter.transformOffer);

      return getGroupedOffers(transformedData);
    } catch (error) {
      return rejectWithValue(error as ApiError);
    }
  },
);
