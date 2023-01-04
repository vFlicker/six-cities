import { Review } from '~/types';

export type State = {
  reviews: Review[];
  loading: boolean;
  error: string | null;
};
