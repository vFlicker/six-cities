import { createReducer } from '@reduxjs/toolkit';
import { fetchOffer } from '../api-actions';
import { TOfferDataState } from '../../types/state';
import ApiError from '../../errors';

const initialState: TOfferDataState = {
  offer: null,
  loading: true,
  error: null,
};

const offerData = createReducer(initialState, ((builder) => {
  builder
    .addCase(fetchOffer.pending, (state) => {
      state.offer = null;
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchOffer.fulfilled, (state, action) => {
      state.offer = action.payload;
      state.loading = false;
      state.error = null;
    })
    .addCase(fetchOffer.rejected, (state, action) => {
      state.offer = null;
      state.loading = false;
      state.error = action.payload as ApiError;
    });
}));

export default offerData;
