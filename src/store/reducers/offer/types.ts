import { ErrorType, Offer, OffersDictionary, Review } from '~/types';

export type State = {
  offers: OffersDictionary;
  offer: Offer | null;
  favorites: OffersDictionary;
  nearby: Offer[];
  comments: Review[];
  loading: boolean[];
  error: ErrorType;
};
