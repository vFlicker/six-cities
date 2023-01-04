import { Offer } from '~/types';

export type State = {
  all: Offer[];
  favorites: Offer[];
  nearby: Offer[];
  loading: boolean;
  error: string | null;
};
