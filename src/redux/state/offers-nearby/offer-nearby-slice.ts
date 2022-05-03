import { createSlice } from '@reduxjs/toolkit';

import { ReducerName } from '@/constants';
import { ApiError } from '@/services';
import { Offer } from '@/types';

import { fetchOfferNearby } from './action';

export type OfferNearbyState = typeof initialState;

const initialState = {
  offersNearby: [] as Offer[],
  loading: true,
  error: null as (ApiError | null),
};

export const offerNearbySlice = createSlice({
  name: ReducerName.OffersNearby,
  initialState,
  reducers: {},
  extraReducers: ((builder) => {
    builder.addCase(fetchOfferNearby.pending, (state) => {
      state.offersNearby = [];
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchOfferNearby.fulfilled, (state, action) => {
      state.offersNearby = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchOfferNearby.rejected, (state, action) => {
      state.offersNearby = [];
      state.loading = false;
      state.error = action.payload as ApiError;
    });
  }),
});
