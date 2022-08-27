import { createSlice } from '@reduxjs/toolkit';

import { ErrorType, Offer, OffersDictionary, Review } from '~/types';

import { ReducerName } from '../../constants';

import {
  changeFavoriteStatus,
  fetchComments,
  fetchOffer,
  addComment,
  fetchOffers,
} from './api-actions';
import { createOffersDictionary } from './utils';

const initialState = {
  offers: {} as OffersDictionary,
  offer: null as unknown as Offer,
  comments: [] as Review[],
  loading: false,
  error: null as ErrorType,
};

const slice = createSlice({
  name: ReducerName.OFFER,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // ----- FETCH ALL OFFERS -----
      .addCase(fetchOffers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offers = createOffersDictionary(action.payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchOffers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ----- FETCH ONE OFFER -----
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

      // ----- FETCH COMMENTS -----
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

      // ----- ADD COMMENT -----
      // TODO: now when comment sending all pages are spinner
      .addCase(addComment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addComment.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(addComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ----- CHANGE FAVORITE STATUS -----
      .addCase(changeFavoriteStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(changeFavoriteStatus.fulfilled, (state, action) => {
        state.offer.isFavorite = action.payload.isFavorite;
        state.loading = false;
        state.error = null;
      })
      .addCase(changeFavoriteStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default slice;
