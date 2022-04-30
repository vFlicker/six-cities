import { createSlice } from '@reduxjs/toolkit';

import { fetchOffersFavorite } from './action';
import { ReducerName } from '../../../const';
import ApiError from '../../../errors';
import { TOffers } from '../../../types/offer';

export type OffersFavoriteState = typeof initialState;

const initialState = {
  offersFavorite: [] as TOffers,
  loading: true,
  error: null as (ApiError | null),
};

export const offersFavoriteSlice = createSlice({
  name: ReducerName.OffersFavorite,
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
