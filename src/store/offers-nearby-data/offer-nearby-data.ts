import { createReducer } from '@reduxjs/toolkit';
import { offersNearbyRequested, offersNearbyLoaded, offersNearbyError } from './actions';
import { TOfferNearbyDataState } from '../../types/state';

const initialState: TOfferNearbyDataState = {
  offersNearby: [],
  loading: true,
  error: null,
};

const offerNearbyData = createReducer(initialState, ((builder) => {
  builder
    .addCase(offersNearbyRequested, (state) => {
      state.offersNearby = [];
      state.loading = true;
      state.error = null;
    })
    .addCase(offersNearbyLoaded, (state, action) => {
      state.offersNearby = action.payload;
      state.loading = false;
      state.error = null;
    })
    .addCase(offersNearbyError, (state, action) => {
      state.offersNearby = [];
      state.loading = false;
      state.error = action.payload;
    });
}));

export default offerNearbyData;
