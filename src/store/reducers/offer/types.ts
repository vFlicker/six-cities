import { ErrorType, Offer, OffersDictionary, Review } from '~/types';

export type State = {
  offers: OffersDictionary | null;
  offer: Offer | null;
  favorites: OffersDictionary;
  nearby: Offer[];
  comments: Review[];
  loading: boolean[];
  error: ErrorType;
};
