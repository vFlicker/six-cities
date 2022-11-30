import { createSlice } from '@reduxjs/toolkit';

import { Reducer } from '~/constants';

import { postComment, fetchComments } from '../../api-actions/comments';
import { State } from './types';

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
        state.error = action.payload as Error;
      })

      /* POST COMMENT */
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
        state.error = action.payload as Error;
      });
  },
});

export { fetchComments, postComment };

export default slice;
