import { createSlice } from '@reduxjs/toolkit';

import { Reducer } from '~/constants';

import {
  changeFavoriteStatus,
  fetchOffer,
  fetchOffers,
  fetchFavoriteOffers,
  fetchOffersNearby,
} from './api-actions';
import { State } from './types';
import { createOffersDictionary, updateOffer } from './utils';

const initialState: State = {
  offers: null,
  offer: null,
  // TODO: use null instead
  favorites: {},
  nearby: [],
  loading: [],
  error: null,
};

const slice = createSlice({
  name: Reducer.Offer,
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

      // ----- CHANGE FAVORITE STATUS -----
      .addCase(changeFavoriteStatus.pending, (state) => {
        state.loading.push(true);
        state.error = null;
      })
      .addCase(changeFavoriteStatus.fulfilled, (state, action) => {
        updateOffer(state, action.payload);
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
