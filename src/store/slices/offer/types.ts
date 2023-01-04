import { Offer } from '~/types';

export type State = {
  offer: Offer | null;
  loading: boolean;
  error: string | null;
};
