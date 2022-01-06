import { createSlice } from '@reduxjs/toolkit';
import { fetchOfferNearby } from './action';
import { OfferNearbyState } from '../../../types/state';
import { ReducerName } from '../../../const';
import ApiError from '../../../errors';

const initialState: OfferNearbyState = {
  offersNearby: [],
  loading: true,
  error: null,
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
