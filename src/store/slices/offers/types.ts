import { Error, Offer } from '~/types';

export type State = {
  offers: Offer[];
  favorites: Offer[];
  nearby: Offer[];
  loading: boolean;
  error: Error;
};
