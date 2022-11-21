import { createSlice } from '@reduxjs/toolkit';

import { Reducer } from '~/constants';

import { toggleFavorite } from '../../api-actions/favorites';
import {
  fetchOffers,
  fetchFavoriteOffers,
  fetchOffersNearby,
} from '../../api-actions/offers';
import { State } from './types';
import {
  createOffersDictionary,
  updateOffersDictionary,
  updateOffers,
} from './utils';

const initialState: State = {
  offers: null,
  favorites: null,
  nearby: [],
  loading: false,
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

      /* FETCH FAVORITES OFFERS */
      .addCase(fetchFavoriteOffers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFavoriteOffers.fulfilled, (state, action) => {
        state.favorites = createOffersDictionary(action.payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchFavoriteOffers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* FETCH OFFERS NEARBY */
      .addCase(fetchOffersNearby.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOffersNearby.fulfilled, (state, action) => {
        state.nearby = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchOffersNearby.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* TOGGLE FAVORITE STATUS */
      .addCase(toggleFavorite.fulfilled, (state, action) => {
        state.offers = updateOffersDictionary(state.offers, action.payload);
        state.favorites = updateOffersDictionary(
          state.favorites,
          action.payload,
        );
        state.nearby = updateOffers(state.nearby, action.payload);
      });
  },
});

export { fetchOffers, fetchFavoriteOffers, fetchOffersNearby };

export default slice;
