import { CityName } from '#src/shared/enums/city-name.enum.js';
import { PropertyType } from '#src/shared/enums/property-type.enum.js';
import { UserType } from '#src/shared/enums/user-type.enum.js';

export type TSVData = {
  cityName: string;
  cityLatitude: string;
  cityLongitude: string;
  hostUsername: string;
  hostEmail: string;
  hostAvatarUrl: string;
  hostType: UserType;
  title: string;
  comments: string;
  commentRatings: string;
  description: string;
  previewImage: string;
  offerImages: string;
  isPremium: string;
  isFavorite: string;
  offerRating: string;
  propertyType: string;
  roomsCount: string;
  guestsCount: string;
  rentalPrice: string;
  amenities: string;
  locationLatitude: string;
  locationLongitude: string;
};

export type ParsedTSVData = {
  cityName: CityName;
  cityLatitude: number;
  cityLongitude: number;
  hostUsername: string;
  hostEmail: string;
  hostAvatarUrl: string;
  hostType: UserType;
  title: string;
  comments: string[];
  commentRatings: number[];
  description: string;
  previewImage: string;
  offerImages: string[];
  isPremium: boolean;
  isFavorite: boolean;
  offerRating: number;
  propertyType: PropertyType;
  roomsCount: number;
  guestsCount: number;
  rentalPrice: number;
  amenities: string[];
  locationLatitude: number;
  locationLongitude: number;
};
