import { createSlice } from '@reduxjs/toolkit';

import { fetchOffer } from './action';
import ApiError from '../../../errors';
import { OfferState } from '../../../types/state';

const initialState: OfferState = {
  offer: null,
  loading: true,
  error: null,
};

export const offerSlice = createSlice({
  name: 'offer',
  initialState,
  reducers: {},
  extraReducers: ((builder) => {
    builder.addCase(fetchOffer.pending, (state) => {
      state.offer = null;
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchOffer.fulfilled, (state, action) => {
      state.offer = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchOffer.rejected, (state, action) => {
      state.offer = null;
      state.loading = false;
      state.error = action.payload as ApiError;
    });
  }),
});
