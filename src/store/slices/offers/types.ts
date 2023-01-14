import { Offer } from '~/types/offer';

export type State = {
  all: Offer[];
  favorites: Offer[];
  nearby: Offer[];
  loading: boolean;
  error: string | null;
};
