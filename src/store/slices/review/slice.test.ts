import { error, makeReview } from '~/utils';

import reviewReducer, { fetchReviews, postReview } from './slice';
import { State } from './types';

const initialState: State = {
  reviews: [],
  loading: false,
  error: null,
};

const loadingState = {
  ...initialState,
  loading: true,
};

const rejectedState: State = {
  ...initialState,
  error: error,
};

const firstReview = makeReview();
const secondReview = makeReview();
const reviews = [firstReview, secondReview];

describe('Slice: reviews', () => {
  it('without additional parameters should return initial state', () => {
    const actionType = { type: 'UNKNOWN_ACTION' };
    expect(reviewReducer(undefined, actionType)).toEqual(initialState);
  });

  describe('fetchReviews', () => {
    it('should return a state with updated the loading status when fetchReviews is pending', () => {
      const actionType = { type: fetchReviews.pending.type };

      const result = reviewReducer(initialState, actionType);
      expect(result.loading).toBeTruthy();
    });

    it('should return a state with updated the loading status when fetchReviews is fulfilled', () => {
      const actionType = {
        type: fetchReviews.fulfilled.type,
        payload: reviews,
      };

      const result = reviewReducer(loadingState, actionType);
      expect(result.loading).toBeFalsy();
    });

    it('should return a state with updated reviews when fetchReviews is fulfilled', () => {
      const actionType = {
        type: fetchReviews.fulfilled.type,
        payload: reviews,
      };

      const result = reviewReducer(loadingState, actionType);
      expect(result.reviews).toEqual(reviews);
    });

    it('should return a state with added error when fetchReviews is rejected', () => {
      const actionType = {
        type: fetchReviews.rejected.type,
        payload: error,
      };

      const result = reviewReducer(initialState, actionType);
      expect(result.error).toEqual(error);
    });

    it('should return a state with removed error when fetchReviews is pending', () => {
      const actionType = {
        type: fetchReviews.pending.type,
      };

      const result = reviewReducer(rejectedState, actionType);
      expect(result.error).toBeNull();
    });

    it('should return a state with removed error when fetchAllOffers is fulfilled', () => {
      const actionType = {
        type: fetchReviews.fulfilled.type,
        payload: reviews,
      };

      const result = reviewReducer(rejectedState, actionType);
      expect(result.error).toBeNull();
    });
  });

  describe('postReview', () => {
    it('should return a state with updated the loading status when postReview is pending', () => {
      const actionType = { type: postReview.pending.type };

      const result = reviewReducer(initialState, actionType);
      expect(result.loading).toBeTruthy();
    });

    it('should return a state with updated the loading status when postReview is fulfilled', () => {
      const actionType = {
        type: postReview.fulfilled.type,
        payload: reviews,
      };

      const result = reviewReducer(loadingState, actionType);
      expect(result.loading).toBeFalsy();
    });

    it('should return a state with updated reviews when postReview is fulfilled', () => {
      const actionType = {
        type: postReview.fulfilled.type,
        payload: reviews,
      };

      const result = reviewReducer(loadingState, actionType);
      expect(result.reviews).toEqual(reviews);
    });

    it('should return a state with added error when postReview is rejected', () => {
      const actionType = {
        type: postReview.rejected.type,
        payload: error,
      };

      const result = reviewReducer(initialState, actionType);
      expect(result.error).toEqual(error);
    });

    it('should return a state with removed error when postReview is pending', () => {
      const actionType = {
        type: postReview.pending.type,
      };

      const result = reviewReducer(rejectedState, actionType);
      expect(result.error).toBeNull();
    });

    it('should return a state with removed error when postReview is fulfilled', () => {
      const actionType = {
        type: postReview.fulfilled.type,
        payload: reviews,
      };

      const result = reviewReducer(rejectedState, actionType);
      expect(result.error).toBeNull();
    });
  });
});
