import { createSlice } from '@reduxjs/toolkit';

import { ErrorType, Offer } from '@/types';

import { fetchOffer } from './api-actions';

const initialState = {
  offer: {} as Offer,
  loading: true,
  error: null as ErrorType,
};

const slice = createSlice({
  name: 'offer',
  initialState,
  reducers: {},
  extraReducers: ((builder) => {
    builder
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
        state.error = action.payload;
      });
  }),
});

export default slice;
