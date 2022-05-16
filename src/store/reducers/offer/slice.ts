import { createSlice } from '@reduxjs/toolkit';

import { ErrorType, Offer, Review } from '@/types';

import { fetchComments, fetchOffer } from './api-actions';

const initialState = {
  offer: null as unknown as Offer,
  comments: [] as Review[],
  loading: false,
  error: null as ErrorType,
};

const slice = createSlice({
  name: 'offer',
  initialState,
  reducers: {},
  extraReducers: ((builder) => {
    builder
      // ----- OFFER -----
      .addCase(fetchOffer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOffer.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchOffer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ----- COMMENTS -----
      .addCase(fetchComments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }),
});

export default slice;
