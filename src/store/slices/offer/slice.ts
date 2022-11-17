import { createSlice } from '@reduxjs/toolkit';

import { Reducer } from '~/constants';
import { Offer } from '~/types';

import { fetchOffer } from './api-actions';

type State = {
  offer: Offer | null;
  loading: boolean;
  error: Error | null;
};

const initialState: State = {
  offer: null,
  loading: false,
  error: null,
};

const slice = createSlice({
  name: Reducer.Offer,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // ----- FETCH ONE OFFER -----
      .addCase(fetchOffer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOffer.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchOffer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as Error;
      });
  },
});

export default slice;
