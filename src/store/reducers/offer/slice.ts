import { createSlice } from '@reduxjs/toolkit';

import { ErrorType, Offer, OffersDictionary, Review } from '~/types';

import { ReducerName } from '../../constants';

import {
  changeFavoriteStatus,
  fetchComments,
  fetchOffer,
  addComment,
  fetchOffers,
  fetchFavoriteOffers,
  fetchOffersNearby,
} from './api-actions';
import { createOffersDictionary } from './utils';

type State = {
  offers: OffersDictionary;
  offer: Offer | null;
  favorites: OffersDictionary;
  nearby: Offer[];
  comments: Review[];
  loading: boolean[];
  error: ErrorType;
};

const initialState: State = {
  offers: {},
  offer: null,
  favorites: {},
  nearby: [],
  comments: [],
  loading: [],
  error: null,
};

const slice = createSlice({
  name: ReducerName.OFFER,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // ----- FETCH ALL OFFERS -----
      .addCase(fetchOffers.pending, (state) => {
        state.loading.push(true);
        state.error = null;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offers = createOffersDictionary(action.payload);
        state.loading.pop();
        state.error = null;
      })
      .addCase(fetchOffers.rejected, (state, action) => {
        state.loading = [];
        state.error = action.payload;
      })

      // ----- FETCH ONE OFFER -----
      .addCase(fetchOffer.pending, (state) => {
        state.loading.push(true);
        state.error = null;
      })
      .addCase(fetchOffer.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.loading.pop();
        state.error = null;
      })
      .addCase(fetchOffer.rejected, (state, action) => {
        state.loading = [];
        state.error = action.payload;
      })

      // ----- FETCH FAVORITES -----
      .addCase(fetchFavoriteOffers.pending, (state) => {
        state.loading.push(true);
        state.error = null;
      })
      .addCase(fetchFavoriteOffers.fulfilled, (state, action) => {
        state.favorites = createOffersDictionary(action.payload);
        state.loading.pop();
        state.error = null;
      })
      .addCase(fetchFavoriteOffers.rejected, (state, action) => {
        state.loading = [];
        state.error = action.payload;
      })

      .addCase(fetchOffersNearby.pending, (state) => {
        state.loading.push(true);
        state.error = null;
      })
      .addCase(fetchOffersNearby.fulfilled, (state, action) => {
        state.nearby = action.payload;
        state.loading.pop();
        state.error = null;
      })
      .addCase(fetchOffersNearby.rejected, (state, action) => {
        state.loading = [];
        state.error = action.payload;
      })

      // ----- FETCH COMMENTS -----
      .addCase(fetchComments.pending, (state) => {
        state.loading.push(true);
        state.error = null;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.loading.pop();
        state.error = null;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.loading = [];
        state.error = action.payload;
      })

      // ----- ADD COMMENT -----
      // TODO: now when comment sending all pages are spinner
      .addCase(addComment.pending, (state) => {
        state.loading.push(true);
        state.error = null;
      })
      .addCase(addComment.fulfilled, (state) => {
        state.loading.pop();
        state.error = null;
      })
      .addCase(addComment.rejected, (state, action) => {
        state.loading = [];
        state.error = action.payload;
      })

      // ----- CHANGE FAVORITE STATUS -----
      .addCase(changeFavoriteStatus.pending, (state) => {
        state.loading.push(true);
        state.error = null;
      })
      .addCase(changeFavoriteStatus.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.loading.pop();
        state.error = null;
      })
      .addCase(changeFavoriteStatus.rejected, (state, action) => {
        state.loading = [];
        state.error = action.payload;
      });
  },
});

export default slice;
