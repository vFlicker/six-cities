import { makeError, makeReview } from '~/utils';

import reviewSlice, { fetchReviews, postReview } from './slice';
import { State } from './types';

const initialState: State = {
  reviews: [],
  loading: false,
  error: null,
};

const firstReview = makeReview();
const secondReview = makeReview();
const reviews = [firstReview, secondReview];

const error = makeError();

describe('Slice: reviews', () => {
  it('without additional parameters should return initial state', () => {
    const UNKNOWN_TYPE = { type: 'UNKNOWN_ACTION' };
    expect(reviewSlice.reducer(undefined, UNKNOWN_TYPE)).toEqual(initialState);
  });

  describe('fetchReviews', () => {
    it('should update loading to "true" when fetchReviews is pending', () => {
      const ACTION_TYPE = { type: fetchReviews.pending.type };

      const updatedState: State = {
        ...initialState,
        loading: true,
      };

      expect(reviewSlice.reducer(initialState, ACTION_TYPE)).toEqual(
        updatedState,
      );
    });

    it('should update loading to "false" and add reviews when fetchReviews is fulfilled', () => {
      const ACTION_TYPE = {
        type: fetchReviews.fulfilled.type,
        payload: reviews,
      };

      const initialState: State = {
        reviews: [],
        loading: true,
        error: null,
      };

      const updatedState: State = {
        ...initialState,
        reviews,
        loading: false,
      };

      expect(reviewSlice.reducer(initialState, ACTION_TYPE)).toEqual(
        updatedState,
      );
    });

    it('should add error to state when fetchReviews is rejected', () => {
      const ACTION_TYPE = {
        type: fetchReviews.rejected.type,
        payload: error,
      };

      const updatedState: State = {
        ...initialState,
        loading: false,
        error: error,
      };

      expect(reviewSlice.reducer(initialState, ACTION_TYPE)).toEqual(
        updatedState,
      );
    });

    it('should remove error from state when fetchReviews is pending or fulfilled', () => {
      const initialState: State = {
        reviews: [],
        loading: false,
        error: error,
      };

      const PENDING_ACTION_TYPE = {
        type: fetchReviews.pending.type,
      };

      const pendingUpdatedState: State = {
        ...initialState,
        loading: true,
        error: null,
      };

      expect(reviewSlice.reducer(initialState, PENDING_ACTION_TYPE)).toEqual(
        pendingUpdatedState,
      );

      const FULFILLED_ACTION_TYPE = {
        type: fetchReviews.fulfilled.type,
        payload: reviews,
      };

      const fulfilledUpdatedState: State = {
        ...initialState,
        reviews,
        error: null,
      };

      expect(reviewSlice.reducer(initialState, FULFILLED_ACTION_TYPE)).toEqual(
        fulfilledUpdatedState,
      );
    });
  });

  describe('postReview', () => {
    it('should update loading to "true" when postReview is pending', () => {
      const ACTION_TYPE = { type: postReview.pending.type };

      const updatedState: State = {
        ...initialState,
        loading: true,
      };

      expect(reviewSlice.reducer(initialState, ACTION_TYPE)).toEqual(
        updatedState,
      );
    });

    it('should update loading to "false" and add reviews when postReview is fulfilled', () => {
      const ACTION_TYPE = {
        type: postReview.fulfilled.type,
        payload: reviews,
      };

      const initialState: State = {
        reviews: [],
        loading: true,
        error: null,
      };

      const updatedState: State = {
        ...initialState,
        reviews,
        loading: false,
      };

      expect(reviewSlice.reducer(initialState, ACTION_TYPE)).toEqual(
        updatedState,
      );
    });

    it('should add error to state when postReview is rejected', () => {
      const ACTION_TYPE = {
        type: postReview.rejected.type,
        payload: error,
      };

      const updatedState: State = {
        ...initialState,
        loading: false,
        error: error,
      };

      expect(reviewSlice.reducer(initialState, ACTION_TYPE)).toEqual(
        updatedState,
      );
    });

    it('should remove error from state when postReview is pending or fulfilled', () => {
      const initialState: State = {
        reviews: [],
        loading: false,
        error: error,
      };

      const PENDING_ACTION_TYPE = {
        type: postReview.pending.type,
      };

      const pendingUpdatedState: State = {
        ...initialState,
        loading: true,
        error: null,
      };

      expect(reviewSlice.reducer(initialState, PENDING_ACTION_TYPE)).toEqual(
        pendingUpdatedState,
      );

      const FULFILLED_ACTION_TYPE = {
        type: postReview.fulfilled.type,
        payload: reviews,
      };

      const fulfilledUpdatedState: State = {
        ...initialState,
        reviews,
        error: null,
      };

      expect(reviewSlice.reducer(initialState, FULFILLED_ACTION_TYPE)).toEqual(
        fulfilledUpdatedState,
      );
    });
  });
});
