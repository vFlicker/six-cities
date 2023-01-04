import { State } from '~/store/slices/review/types';
import { error, makeReview } from '~/utils';

const firstReview = makeReview();
const secondReview = makeReview();
const reviews = [firstReview, secondReview];

export const initialState: State = {
  reviews: [],
  loading: false,
  error: null,
};

export const stateWithReviews: State = {
  reviews,
  loading: false,
  error: null,
};

export const loadingState: State = {
  ...initialState,
  loading: true,
};

export const rejectedState: State = {
  ...initialState,
  error,
};
