type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type City = {
  location: Location;
  name: CityName;
};

type Host = {
  id: UniqueId;
  avatarUrl: string;
  isPro: boolean;
  name: string;
};

export type CityName =
  | 'Paris'
  | 'Cologne'
  | 'Brussels'
  | 'Amsterdam'
  | 'Hamburg'
  | 'Dusseldorf';

export type Hotel = {
  id: UniqueId;
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
