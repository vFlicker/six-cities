import { CamelToSnakeCaseNested } from './helpers';

export type TCity = {
  location: TLocation;
  name: string;
};

export type THost = {
  id: number;
  avatarUrl?: string;
  isPro?: boolean;
  name: string;
};

export type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type TOffer = {
  id: number;
  bedrooms: number;
  city: TCity;
  description: string;
  goods: string[];
  host: THost;
  images: string[];
  isFavorite?: boolean;
  isPremium?: boolean;
  location: TLocation;
  maxAdults?: number;
  previewImage?: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};

export type TOfferServer = Omit<CamelToSnakeCaseNested<TOffer>, 'host'> & {
  host: CamelToSnakeCaseNested<THost>;
};

export type TOffers = TOffer[];

export type TGroupedOffers = Record<string, TOffers>;
