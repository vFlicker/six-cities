export type CityName = 'Paris'
  | 'Cologne'
  | 'Brussels'
  | 'Amsterdam'
  | 'Hamburg'
  | 'Dusseldorf';

export type TSortNames = 'Popular'
  | 'Price: low to high'
  | 'Price: high to low'
  | 'Top rated first';

export type ReviewsListItem = {
  id: number,
  comment: string,
  date: string,
  rating: number,
  user: {
    id: number,
    avatarUrl: string,
    isPro: boolean,
    name: string,
  },
};

export type OfferListItem = {
  id: number,
  bedrooms: number,
  city: {
    location: {
      latitude: number,
      longitude: number,
      zoom: number,
    },
    name: string,
  },
  description: string,
  goods: string[],
  host: {
    id: number,
    avatarUrl: string,
    isPro: boolean,
    name: string,
  },
  images: string[],
  isFavorite: boolean,
  isPremium: boolean,
  location: {
    latitude: number,
    longitude: number,
    zoom: number,
  },
  maxAdults: number,
  previewImage: string,
  price: number,
  rating: number,
  title: string,
  type: string,
};
