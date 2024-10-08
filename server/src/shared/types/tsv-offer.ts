import { CityName } from './city-name.enum.js';
import { PropertyType } from './property-type.enum.js';
import { UserType } from './user-type.enum.js';

export type TSVOffer = {
  title: string;
  description: string;
  cityName: CityName;
  previewImage: string;
  offerImages: string[];
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  propertyType: PropertyType;
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
};
