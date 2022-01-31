import { createAsyncThunk } from '@reduxjs/toolkit';

import { APIRoute } from '../../../const';
import ApiError from '../../../errors';
import { Adapter } from '../../../services';
import { AsyncThunkOptions } from '../../../types/action';
import { TOffers, TOffersServer } from '../../../types/offer';

export const fetchOfferNearby = createAsyncThunk<TOffers, number, AsyncThunkOptions>(
  'offerNearby',
  async (id, { extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.get<TOffersServer>(`${APIRoute.Offers}/${id}/nearby`);

      return data.map(Adapter.transformOffer);
    } catch (error) {
      return rejectWithValue(error as ApiError);
    }
  },
);
