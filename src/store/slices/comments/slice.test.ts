import { makeError, makeReview } from '~/utils';

import commentSlice, { fetchComments, postComment } from './slice';
import { State } from './types';

const initialState: State = {
  comments: [],
  loading: false,
  error: null,
};

const firstComment = makeReview();
const secondComment = makeReview();
const comments = [firstComment, secondComment];

const error = makeError();

describe('Slice: comments', () => {
  it('without additional parameters should return initial state', () => {
    const UNKNOWN_TYPE = { type: 'UNKNOWN_ACTION' };
    expect(commentSlice.reducer(undefined, UNKNOWN_TYPE)).toEqual(initialState);
  });

  describe('fetchComments', () => {
    it('should update loading to "true" when fetchComments is pending', () => {
      const ACTION_TYPE = { type: fetchComments.pending.type };

      const updatedState: State = {
        ...initialState,
        loading: true,
      };

      expect(commentSlice.reducer(initialState, ACTION_TYPE)).toEqual(
        updatedState,
      );
    });

    it('should update loading to "false" and add comments when fetchComments is fulfilled', () => {
      const ACTION_TYPE = {
        type: fetchComments.fulfilled.type,
        payload: comments,
      };

      const initialState: State = {
        comments: [],
        loading: true,
        error: null,
      };

      const updatedState: State = {
        ...initialState,
        comments: comments,
        loading: false,
      };

      expect(commentSlice.reducer(initialState, ACTION_TYPE)).toEqual(
        updatedState,
      );
    });

    it('should add error to state when fetchComments is rejected', () => {
      const ACTION_TYPE = {
        type: fetchComments.rejected.type,
        payload: error,
      };

      const updatedState: State = {
        ...initialState,
        loading: false,
        error: error,
      };

      expect(commentSlice.reducer(initialState, ACTION_TYPE)).toEqual(
        updatedState,
      );
    });

    it('should remove error from state when fetchComments is pending or fulfilled', () => {
      const initialState: State = {
        comments: [],
        loading: false,
        error: error,
      };

      const PENDING_ACTION_TYPE = {
        type: fetchComments.pending.type,
      };

      const pendingUpdatedState: State = {
        ...initialState,
        loading: true,
        error: null,
      };

      expect(commentSlice.reducer(initialState, PENDING_ACTION_TYPE)).toEqual(
        pendingUpdatedState,
      );

      const FULFILLED_ACTION_TYPE = {
        type: fetchComments.fulfilled.type,
        payload: comments,
      };

      const fulfilledUpdatedState: State = {
        ...initialState,
        comments: comments,
        error: null,
      };

      expect(commentSlice.reducer(initialState, FULFILLED_ACTION_TYPE)).toEqual(
        fulfilledUpdatedState,
      );
    });
  });

  describe('postComment', () => {
    it('should update loading to "true" when postComment is pending', () => {
      const ACTION_TYPE = { type: postComment.pending.type };

      const updatedState: State = {
        ...initialState,
        loading: true,
      };

      expect(commentSlice.reducer(initialState, ACTION_TYPE)).toEqual(
        updatedState,
      );
    });

    it('should update loading to "false" and add comments when postComment is fulfilled', () => {
      const ACTION_TYPE = {
        type: postComment.fulfilled.type,
        payload: comments,
      };

      const initialState: State = {
        comments: [],
        loading: true,
        error: null,
      };

      const updatedState: State = {
        ...initialState,
        comments: comments,
        loading: false,
      };

      expect(commentSlice.reducer(initialState, ACTION_TYPE)).toEqual(
        updatedState,
      );
    });

    it('should add error to state when postComment is rejected', () => {
      const ACTION_TYPE = {
        type: postComment.rejected.type,
        payload: error,
      };

      const updatedState: State = {
        ...initialState,
        loading: false,
        error: error,
      };

      expect(commentSlice.reducer(initialState, ACTION_TYPE)).toEqual(
        updatedState,
      );
    });

    it('should remove error from state when postComment is pending or fulfilled', () => {
      const initialState: State = {
        comments: [],
        loading: false,
        error: error,
      };

      const PENDING_ACTION_TYPE = {
        type: postComment.pending.type,
      };

      const pendingUpdatedState: State = {
        ...initialState,
        loading: true,
        error: null,
      };

      expect(commentSlice.reducer(initialState, PENDING_ACTION_TYPE)).toEqual(
        pendingUpdatedState,
      );

      const FULFILLED_ACTION_TYPE = {
        type: postComment.fulfilled.type,
        payload: comments,
      };

      const fulfilledUpdatedState: State = {
        ...initialState,
        comments: comments,
        error: null,
      };

      expect(commentSlice.reducer(initialState, FULFILLED_ACTION_TYPE)).toEqual(
        fulfilledUpdatedState,
      );
    });
  });
});
