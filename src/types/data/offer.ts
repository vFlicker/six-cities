import { CityName } from '~/constants';

import { CamelToSnakeCaseNested } from '../util-types';

export type City = {
  location: Location;
  name: CityName;
};

export type Host = {
  id: number;
  avatarUrl?: string;
  isPro?: boolean;
  name: string;
};

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type Offer = {
  id: number;
  bedrooms: number;
  city: City;
  description: string;
  goods: string[];
  host: Host;
  images: string[];
  isFavorite?: boolean;
  isPremium?: boolean;
  location: Location;
  maxAdults?: number;
  previewImage?: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};

export type OffersDictionary = Record<string, Offer[]>;

export type OfferServer = Omit<CamelToSnakeCaseNested<Offer>, 'host'> & {
  host: CamelToSnakeCaseNested<Host>;
};
