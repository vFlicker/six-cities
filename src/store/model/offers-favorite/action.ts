import { createAsyncThunk } from '@reduxjs/toolkit';

import { APIRoute } from '../../../const';
import ApiError from '../../../errors';
import Adapter from '../../../services/adapter';
import { AsyncThunkOptions } from '../../../types/action';
import { TOffers, TOffersServer } from '../../../types/offer';

export const fetchOffersFavorite = createAsyncThunk<TOffers, void, AsyncThunkOptions>(
  'offersFavorite',
  async (_, { extra: apiService, rejectWithValue }) => {
    try {
      const { data } = await apiService.get<TOffersServer>(`${APIRoute.Favorite}`);

      return data.map(Adapter.transformOffer);
    } catch (error) {
      return rejectWithValue(error as ApiError);
    }
  },
);
