import { createSlice } from '@reduxjs/toolkit';

import { Offers } from '@/types';
import { ApiError } from '@/services';

import { ReducerName } from '../../constants';
import { fetchOffers } from './api-actions';

const initialState = {
  offers: {} as Offers,
  loading: true,
  error: null as (ApiError | null),
};

export const offersSlice = createSlice({
  name: ReducerName.OFFERS,
  initialState,
  reducers: {},
  extraReducers: ((builder) => {
    builder.addCase(fetchOffers.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchOffers.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchOffers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as ApiError;
    });
  }),
});
