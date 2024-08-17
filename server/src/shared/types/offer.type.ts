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
  images: string[];
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  propertyType: Property;
  rooms: number;
  guestsCount: number;
  price: number;
  amenities: string[];
  host: User;
  location: Location;
};
