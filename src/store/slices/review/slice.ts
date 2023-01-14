import { createSlice } from '@reduxjs/toolkit';

import { Reducer } from '~/constants';

import { postReview, fetchReviews } from '../../api-actions/review';
import { State } from './types';

const initialState: State = {
  reviews: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: Reducer.Review,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      /* FETCH REVIEW */
      .addCase(fetchReviews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchReviews.rejected, (state, { payload }) => {
        state.loading = false;
        if (payload) state.error = payload.message;
      })

      /* POST REVIEW */
      .addCase(postReview.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postReview.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(postReview.rejected, (state, { payload }) => {
        state.loading = false;
        if (payload) state.error = payload.message;
      });
  },
});

export { fetchReviews, postReview };

export * from './selectors';

export default slice.reducer;
