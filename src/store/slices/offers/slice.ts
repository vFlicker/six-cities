import { createSlice } from '@reduxjs/toolkit';

import { Reducer } from '~/constants';

import { toggleFavorite } from '../../api-actions/app';
import {
  fetchAllOffers,
  fetchFavoriteOffers,
  fetchOffersNearby,
} from '../../api-actions/offers';
import { logout } from '../../api-actions/user';
import { State } from './types';
import { updateFavorites, updateOffers } from './utils';

const initialState: State = {
  all: [],
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
      .addCase(fetchAllOffers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllOffers.fulfilled, (state, action) => {
        state.all = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchAllOffers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as Error;
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
        state.error = action.payload as Error;
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
        state.error = action.payload as Error;
      })

      /* TOGGLE FAVORITE STATUS */
      .addCase(toggleFavorite.fulfilled, (state, action) => {
        state.all = updateOffers(state.all, action.payload);
        state.favorites = updateFavorites(state.favorites, action.payload);
        state.nearby = updateOffers(state.nearby, action.payload);
      })

      /* LOGOUT */
      .addCase(logout.fulfilled, (state) => {
        state.favorites = [];
      });
  },
});

export { fetchAllOffers, fetchFavoriteOffers, fetchOffersNearby };

export default slice;
