import { createSlice } from '@reduxjs/toolkit';

import { Reducer } from '~/constants';
import { Error, Review } from '~/types';

import { postComment, fetchComments } from '../../api-actions/comments';

type State = {
  comments: Review[];
  loading: boolean;
  error: Error;
};

const initialState: State = {
  comments: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: Reducer.Comments,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      /* FETCH COMMENT */
      .addCase(fetchComments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* POST COMMENT */
      // TODO: now when comment sending all pages are spinner
      .addCase(postComment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(postComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export { fetchComments, postComment };

export default slice;
