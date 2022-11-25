import { createSlice } from '@reduxjs/toolkit';

import { Reducer } from '~/constants';

import { toggleFavorite } from '../../api-actions/favorites';
import {
  fetchOffers,
  fetchFavoriteOffers,
  fetchOffersNearby,
} from '../../api-actions/offers';
import { logout } from '../../api-actions/user';
import { State } from './types';
import { updateFavorites, updateOffers } from './utils';

const initialState: State = {
  offers: [],
  favorites: [],
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
        state.offers = action.payload;
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
        state.favorites = action.payload;
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
        state.offers = updateOffers(state.offers, action.payload);
        state.favorites = updateFavorites(state.favorites, action.payload);
        state.nearby = updateOffers(state.nearby, action.payload);
      })

      /* LOGOUT */
      .addCase(logout.fulfilled, (state) => {
        state.favorites = [];
      });
  },
});

export { fetchOffers, fetchFavoriteOffers, fetchOffersNearby };

export default slice;
