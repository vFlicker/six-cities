import { CityName } from './city-name.enum.js';
import { Location } from './location.type.js';
import { PropertyType } from './property-type.enum.js';
import { User } from './user.type.js';

export type Offer = {
  title: string;
  description: string;
  city: CityName;
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
  host: User;
  location: Location;
};
