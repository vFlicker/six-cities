import { createSlice } from '@reduxjs/toolkit';

import { ErrorType, Offers } from '~/types';

import { ReducerName } from '../../constants';
import { fetchOffers } from './api-actions';

const initialState = {
  offers: {} as Offers,
  loading: false,
  error: null as ErrorType,
};

const slice = createSlice({
  name: ReducerName.OFFERS,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
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
      });
  },
});

export default slice;
