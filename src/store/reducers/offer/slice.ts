import { createSlice } from '@reduxjs/toolkit';

import { ErrorType, Offer, Review } from '@/types';

import {
  changeOfferFavoriteStatus, fetchComments, fetchOffer, sendComment,
} from './api-actions';

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

      // ----- LOAD COMMENTS -----
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
      })

      // ----- SEND COMMENT -----
      // TODO: now when comment sending all pages are spinner
      .addCase(sendComment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendComment.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(sendComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ----- CHANGE OFFER FAVORITE STATUS -----
      .addCase(changeOfferFavoriteStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(changeOfferFavoriteStatus.fulfilled, (state, action) => {
        state.offer.isFavorite = action.payload.isFavorite;
        state.loading = false;
        state.error = null;
      })
      .addCase(changeOfferFavoriteStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }),
});

export default slice;
