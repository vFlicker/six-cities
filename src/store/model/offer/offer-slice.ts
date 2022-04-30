import { createSlice } from '@reduxjs/toolkit';

import ApiError from '../../../errors';
import { TOffer } from '../../../types/offer';
import { fetchOffer } from './action';

export type OfferState = typeof initialState;

const initialState = {
  offer: {} as TOffer,
  loading: true,
  error: null as (ApiError | null),
};

export const offerSlice = createSlice({
  name: 'offer',
  initialState,
  reducers: {},
  extraReducers: ((builder) => {
    builder.addCase(fetchOffer.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchOffer.fulfilled, (state, action) => {
      state.offer = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchOffer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as ApiError;
    });
  }),
});
