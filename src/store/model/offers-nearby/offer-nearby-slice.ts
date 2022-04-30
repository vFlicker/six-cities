import { createSlice } from '@reduxjs/toolkit';
import { fetchOfferNearby } from './action';
import { ReducerName } from '../../../const';
import ApiError from '../../../errors';
import { TOffers } from '../../../types/offer';

export type OfferNearbyState = typeof initialState;

const initialState = {
  offersNearby: [] as TOffers,
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
