import { createSlice } from '@reduxjs/toolkit';

import { fetchOffers } from './action';
import { ReducerName } from '../../../const';
import ApiError from '../../../errors';
import { OffersState } from '../../../types/state';

const initialState: OffersState = {
  groupedOffers: null,
  loading: true,
  error: null,
};

export const offersSlice = createSlice({
  name: ReducerName.Offers,
  initialState,
  reducers: {},
  extraReducers: ((builder) => {
    builder.addCase(fetchOffers.pending, (state) => {
      state.groupedOffers = null;
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchOffers.fulfilled, (state, action) => {
      state.groupedOffers = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchOffers.rejected, (state, action) => {
      state.groupedOffers = null;
      state.loading = false;
      state.error = action.payload as ApiError;
    });
  }),
});
