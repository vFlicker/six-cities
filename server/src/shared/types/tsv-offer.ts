import { CityName } from './city.type.js';
import { Property } from './offer.type.js';
import { UserType } from './user.type.js';

export type TSVOffer = {
  title: string;
  description: string;
  cityName: CityName;
  cityLocationLatitude: number;
  cityLocationLongitude: number;
  previewImage: string;
  offerImages: string[];
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  propertyType: Property;
  roomsCount: number;
  guestsCount: number;
  rentalPrice: number;
  amenities: string[];
  hostName: string;
  hostEmail: string;
  hostAvatarUrl: string;
  hostType: UserType;
  offerLocationLatitude: number;
  offerLocationLongitude: number;
  publishedAt: string;
};
