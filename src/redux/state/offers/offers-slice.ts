import { createSlice } from '@reduxjs/toolkit';

import { GroupedOffers } from '@/types';
import { ApiError } from '@/services';

import { ReducerName } from '../constants';
import { fetchOffers } from './action';

export type OffersState = typeof initialState;

const initialState = {
  groupedOffers: {} as GroupedOffers,
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
