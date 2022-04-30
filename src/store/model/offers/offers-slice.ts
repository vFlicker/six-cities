import { createSlice } from '@reduxjs/toolkit';

import { fetchOffers } from './action';
import { ReducerName } from '../../../const';
import ApiError from '../../../errors';
import { TGroupedOffers } from '../../../types/offer';

export type OffersState = typeof initialState;

const initialState = {
  groupedOffers: {} as TGroupedOffers,
  loading: true,
  error: null as (ApiError | null),
};

export const offersSlice = createSlice({
  name: ReducerName.Offers,
  initialState,
  reducers: {},
  extraReducers: ((builder) => {
    builder.addCase(fetchOffers.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchOffers.fulfilled, (state, action) => {
      state.groupedOffers = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchOffers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as ApiError;
    });
  }),
});
