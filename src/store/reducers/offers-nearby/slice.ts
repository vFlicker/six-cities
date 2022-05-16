import { createSlice } from '@reduxjs/toolkit';

import { ErrorType, Offer } from '@/types';

import { ReducerName } from '../../constants';
import { fetchOfferNearby } from './api-actions';

const initialState = {
  offersNearby: [] as Offer[],
  loading: false,
  error: null as ErrorType,
};

const slice = createSlice({
  name: ReducerName.OFFERS_NEARBY,
  initialState,
  reducers: {},
  extraReducers: ((builder) => {
    builder
      .addCase(fetchOfferNearby.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOfferNearby.fulfilled, (state, action) => {
        state.offersNearby = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchOfferNearby.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }),
});

export default slice;
