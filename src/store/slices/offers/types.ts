import { Error, Offer, OffersDictionary } from '~/types';

export type State = {
  offers: OffersDictionary | null;
  favorites: OffersDictionary;
  nearby: Offer[];
  loading: boolean[];
  error: Error;
};
