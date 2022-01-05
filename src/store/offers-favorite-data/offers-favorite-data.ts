import { createReducer } from '@reduxjs/toolkit';
import { offersFavoriteError, offersFavoriteLoaded, offersFavoriteRequested } from './actions';
import { TOffersFavoriteDataState } from '../../types/state';

const initialState: TOffersFavoriteDataState = {
  offersFavorite: [],
  loading: true,
  error: null,
};

const offersFavoriteData = createReducer(initialState, (builder) => {
  builder
    .addCase(offersFavoriteRequested, (state) => {
      state.offersFavorite = [];
      state.loading = true;
      state.error = null;
    })
    .addCase(offersFavoriteLoaded, (state, action) => {
      state.offersFavorite = action.payload;
      state.loading = false;
      state.error = null;
    })
    .addCase(offersFavoriteError, (state, action) => {
      state.offersFavorite = [];
      state.loading = false;
      state.error = action.payload;
    });
});

export default offersFavoriteData;
