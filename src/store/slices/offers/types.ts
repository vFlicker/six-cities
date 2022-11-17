import { ErrorType, Offer, OffersDictionary } from '~/types';

export type State = {
  offers: OffersDictionary | null;
  offer: Offer | null;
  favorites: OffersDictionary;
  nearby: Offer[];
  loading: boolean[];
  error: ErrorType;
};
