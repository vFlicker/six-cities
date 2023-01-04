import { CityName, FavoriteStatus } from '~/constants';

export type ToggleFavoritePayload = {
  id: OfferID;
  status: FavoriteStatus;
};

export type City = {
  location: Location;
  name: CityName;
};

export type Host = {
  id: number;
  avatarUrl: string;
  isPro: boolean;
  name: string;
};

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type OfferID = number;

export type Offer = {
  id: OfferID;
  bedrooms: number;
  city: City;
  description: string;
  goods: string[];
  host: Host;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: Location;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};

export type OffersByCity = Record<CityName, Offer[]>;

export type PartialOffersByCity = Partial<OffersByCity>;
