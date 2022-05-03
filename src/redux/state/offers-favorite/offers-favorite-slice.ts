import { createSlice } from '@reduxjs/toolkit';

import { ApiError } from '@/services';
import { Offer } from '@/types';

import { ReducerName } from '../constants';
import { fetchOffersFavorite } from './action';

export type OffersFavoriteState = typeof initialState;

const initialState = {
  offersFavorite: [] as Offer[],
  loading: true,
  error: null as (ApiError | null),
};

export const offersFavoriteSlice = createSlice({
  name: ReducerName.OFFERS_FAVORITE,
  initialState,
  reducers: {},
  extraReducers: ((builder) => {
    builder.addCase(fetchOffersFavorite.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchOffersFavorite.fulfilled, (state, action) => {
      state.offersFavorite = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchOffersFavorite.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as ApiError;
    });
  }),
});
