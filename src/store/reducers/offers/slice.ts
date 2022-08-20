import { createSlice } from '@reduxjs/toolkit';

import { ErrorType, OffersDictionary } from '~/types';

import { ReducerName } from '../../constants';
import { fetchOffers } from './api-actions';
import { createOffersDictionary } from './utils';

const initialState = {
  offers: {} as OffersDictionary,
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
        state.offers = createOffersDictionary(action.payload);
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
