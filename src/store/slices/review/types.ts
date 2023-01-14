import { Review } from '~/types/review';

export type State = {
  reviews: Review[];
  loading: boolean;
  error: string | null;
};
