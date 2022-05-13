import { createSlice } from '@reduxjs/toolkit';

import { ApiError } from '@/services';
import { Offer } from '@/types';

import { ReducerName } from '../../constants';
import { fetchOfferNearby } from './action';

const initialState = {
  offersNearby: [] as Offer[],
  loading: true,
  error: null as (ApiError | null),
};

export const offerNearbySlice = createSlice({
  name: ReducerName.OFFERS_NEARBY,
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
