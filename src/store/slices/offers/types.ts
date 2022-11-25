import { Error, Offer } from '~/types';

export type State = {
  all: Offer[];
  favorites: Offer[];
  nearby: Offer[];
  loading: boolean;
  error: Error;
};
