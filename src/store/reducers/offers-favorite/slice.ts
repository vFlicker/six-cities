import { createSlice } from '@reduxjs/toolkit';

import { ErrorType, Offer } from '@/types';

import { ReducerName } from '../../constants';
import { fetchOffersFavorite } from './api-actions';

const initialState = {
  offersFavorite: [] as Offer[],
  loading: true,
  error: null as ErrorType,
};

const slice = createSlice({
  name: ReducerName.OFFERS_FAVORITE,
  initialState,
  reducers: {},
  extraReducers: ((builder) => {
    builder
      .addCase(fetchOffersFavorite.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOffersFavorite.fulfilled, (state, action) => {
        state.offersFavorite = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchOffersFavorite.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }),
});

export default slice;
