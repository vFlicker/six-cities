import { Offer } from '~/types/offer';

export type State = {
  offer: Offer | null;
  loading: boolean;
  error: string | null;
};
