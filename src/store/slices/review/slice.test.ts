import { reviewStore } from '~/tests';
import { error } from '~/utils/mock-data';

import reviewReducer, { fetchReviews, postReview } from './slice';

const { initialState, loadingState, rejectedState, stateWithReviews } =
  reviewStore;

describe('Slice: reviews', () => {
  it('without additional parameters should return initial state', () => {
    const actionType = { type: 'UNKNOWN_ACTION' };
    expect(reviewReducer(undefined, actionType)).toEqual(initialState);
  });

  describe('fetchReviews', () => {
    it('should return a state with the loading status "true" when fetchReviews is pending', () => {
      const actionType = { type: fetchReviews.pending.type };

      const result = reviewReducer(initialState, actionType);
      expect(result.loading).toBeTruthy();
    });

    it('should return a state with the loading status "false" when fetchReviews is fulfilled', () => {
      const actionType = {
        type: fetchReviews.fulfilled.type,
        payload: stateWithReviews.reviews,
      };

      const result = reviewReducer(loadingState, actionType);
      expect(result.loading).toBeFalsy();
    });

    it('should return a state with updated reviews when fetchReviews is fulfilled', () => {
      const actionType = {
        type: fetchReviews.fulfilled.type,
        payload: stateWithReviews.reviews,
      };

      const result = reviewReducer(loadingState, actionType);
      expect(result.reviews).toEqual(stateWithReviews.reviews);
    });

    it('should return a state with added error when fetchReviews is rejected', () => {
      const actionType = {
        type: fetchReviews.rejected.type,
        payload: error,
      };

      const result = reviewReducer(initialState, actionType);
      expect(result.error).toEqual(error.message);
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
        payload: stateWithReviews.reviews,
      };

      const result = reviewReducer(rejectedState, actionType);
      expect(result.error).toBeNull();
    });
  });

  describe('postReview', () => {
    it('should return a state with the loading status "true" when postReview is pending', () => {
      const actionType = { type: postReview.pending.type };

      const result = reviewReducer(initialState, actionType);
      expect(result.loading).toBeTruthy();
    });

    it('should return a state with the loading status "false" when postReview is fulfilled', () => {
      const actionType = {
        type: postReview.fulfilled.type,
        payload: stateWithReviews.reviews,
      };

      const result = reviewReducer(loadingState, actionType);
      expect(result.loading).toBeFalsy();
    });

    it('should return a state with updated reviews when postReview is fulfilled', () => {
      const actionType = {
        type: postReview.fulfilled.type,
        payload: stateWithReviews.reviews,
      };

      const result = reviewReducer(loadingState, actionType);
      expect(result.reviews).toEqual(stateWithReviews.reviews);
    });

    it('should return a state with added error when postReview is rejected', () => {
      const actionType = {
        type: postReview.rejected.type,
        payload: error,
      };

      const result = reviewReducer(initialState, actionType);
      expect(result.error).toEqual(error.message);
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
        payload: stateWithReviews.reviews,
      };

      const result = reviewReducer(rejectedState, actionType);
      expect(result.error).toBeNull();
    });
  });
});
