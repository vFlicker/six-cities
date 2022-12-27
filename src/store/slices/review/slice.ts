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
      .addCase(fetchReviews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as Error;
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
      .addCase(postReview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as Error;
      });
  },
});

export { fetchReviews, postReview };

export default slice.reducer;
