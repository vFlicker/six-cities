import { CityName } from '../../../types/city-name.enum.js';
import { PropertyType } from '../../../types/property-type.enum.js';
import { UserType } from '../../../types/user-type.enum.js';

export type TSVData = {
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
  locationLatitude: number;
  locationLongitude: number;
};
