import { createReducer } from '@reduxjs/toolkit';
import { offerError, offerRequested, offerLoaded } from './actions';
import { TOfferDataState } from '../../types/state';

const initialState: TOfferDataState = {
  offer: null,
  loading: true,
  error: null,
};

const offerData = createReducer(initialState, ((builder) => {
  builder
    .addCase(offerRequested, (state) => {
      state.offer = null;
      state.loading = true;
      state.error = null;
    })
    .addCase(offerLoaded, (state, action) => {
      state.offer = action.payload;
      state.loading = false;
      state.error = null;
    })
    .addCase(offerError, (state, action) => {
      state.offer = null;
      state.loading = false;
      state.error = action.payload;
    });
}));

export default offerData;
