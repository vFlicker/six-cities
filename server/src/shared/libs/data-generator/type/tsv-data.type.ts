import { CityName } from '#src/shared/enums/city-name.enum.js';
import { PropertyType } from '#src/shared/enums/property-type.enum.js';
import { UserType } from '#src/shared/enums/user-type.enum.js';

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
