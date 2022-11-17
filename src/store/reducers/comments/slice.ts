import { createSlice } from '@reduxjs/toolkit';

import { ErrorType, Review } from '~/types';

import { ReducerName } from '../../constants';
import { addComment, fetchComments } from './api-actions';

type State = {
  comments: Review[];
  loading: boolean;
  error: ErrorType;
};

const initialState: State = {
  comments: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: ReducerName.OFFER,
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

      /* ADD COMMENT */
      // TODO: now when comment sending all pages are spinner
      .addCase(addComment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(addComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default slice;
