import { City } from './city.type.js';
import { Location } from './location.type.js';
import { User } from './user.type.js';

export enum Property {
  Apartment = 'apartment',
  Room = 'room',
  House = 'house',
  Hotel = 'hotel',
}

export type Offer = {
  title: string;
  description: string;
  publishedAt: Date;
  city: City;
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
  host: User;
  location: Location;
};
