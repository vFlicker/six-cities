import { createSlice } from '@reduxjs/toolkit';

import { ErrorType, OffersDictionary } from '~/types';

import { ReducerName } from '../../constants';
import { createOffersDictionary } from '../offer/utils';
import { fetchOffersFavorite } from './api-actions';

const initialState = {
  offersFavorite: {} as OffersDictionary,
  loading: false,
  error: null as ErrorType,
};

const slice = createSlice({
  name: ReducerName.OFFERS_FAVORITE,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffersFavorite.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOffersFavorite.fulfilled, (state, action) => {
        state.offersFavorite = createOffersDictionary(action.payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchOffersFavorite.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default slice;
