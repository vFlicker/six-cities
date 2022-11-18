import { createSlice } from '@reduxjs/toolkit';

import { Reducer } from '~/constants';

import { toggleFavoriteStatus } from '../../api-actions/offer';
import {
  fetchOffers,
  fetchFavoriteOffers,
  fetchOffersNearby,
} from '../../api-actions/offers';
import { State } from './types';
import { createOffersDictionary, updateOffer } from './utils';

const initialState: State = {
  offers: null,
  // TODO: use null instead
  favorites: {},
  nearby: [],
  loading: [],
  error: null,
};

const slice = createSlice({
  name: Reducer.Offers,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      /* FETCH OFFERS */
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

      /* FETCH FAVORITES OFFERS */
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

      /* FETCH OFFERS NEARBY */
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

      /* TOGGLE FAVORITE STATUS */
      .addCase(toggleFavoriteStatus.pending, (state) => {
        state.loading.push(true);
        state.error = null;
      })
      .addCase(toggleFavoriteStatus.fulfilled, (state, action) => {
        updateOffer(state, action.payload);
        state.loading.pop();
        state.error = null;
      })
      .addCase(toggleFavoriteStatus.rejected, (state, action) => {
        state.loading = [];
        state.error = action.payload;
      });
  },
});

export {
  fetchOffers,
  fetchFavoriteOffers,
  fetchOffersNearby,
  toggleFavoriteStatus,
};

export default slice;
