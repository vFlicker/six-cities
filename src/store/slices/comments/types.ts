import { Review } from '~/types';

export type State = {
  comments: Review[];
  loading: boolean;
  error: Error | null;
};
