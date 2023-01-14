import { createSlice } from '@reduxjs/toolkit';

import { Reducer } from '~/constants';

import { toggleFavorite } from '../../api-actions/app';
import { fetchOffer } from '../../api-actions/offer';
import { State } from './types';

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
      /* FETCH OFFER */
      .addCase(fetchOffer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOffer.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchOffer.rejected, (state, { payload }) => {
        state.loading = false;
        if (payload) state.error = payload.message;
      })

      /* TOGGLE FAVORITE */
      .addCase(toggleFavorite.fulfilled, (state, action) => {
        state.offer = action.payload;
      });
  },
});

export { fetchOffer };

export * from './selectors';

export default slice.reducer;
