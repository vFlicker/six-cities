import { createSlice } from '@reduxjs/toolkit';

import { fetchOffersFavorite } from './action';
import { ReducerName } from '../../../const';
import ApiError from '../../../errors';
import { OffersFavoriteState } from '../../../types/state';

const initialState: OffersFavoriteState = {
  offersFavorite: [],
  loading: true,
  error: null,
};

export const offersFavoriteSlice = createSlice({
  name: ReducerName.OffersFavorite,
  initialState,
  reducers: {},
  extraReducers: ((builder) => {
    builder.addCase(fetchOffersFavorite.pending, (state) => {
      state.offersFavorite = [];
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchOffersFavorite.fulfilled, (state, action) => {
      state.offersFavorite = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchOffersFavorite.rejected, (state, action) => {
      state.offersFavorite = [];
      state.loading = false;
      state.error = action.payload as ApiError;
    });
  }),
});
