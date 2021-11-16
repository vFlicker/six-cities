export enum ApiRoute {
  COMMENTS = 'comments',
  FAVORITES = 'favorites',
  HOTELS = 'hotels',
  LOGIN = 'login',
  LOGOUT = 'logout',
}

export enum AppRoute {
  FAVORITES = '/favorites',
  LOGIN = '/login',
  OFFERS = '/offers/:id',
  ROOT = '/'
}

export const BACKEND_URL = 'https://6.react.pages.academy/six-cities';

export enum CardType {
  CITIES = 'cities',
  FAVORITES = 'favorites',
  NEAR_PLACES = 'near-places',
}

export enum CityName {
  PARIS = 'Paris',
  COLOGNE = 'Cologne',
  BRUSSELS = 'Brussels',
  AMSTERDAM = 'Amsterdam',
  HAMBURG = 'Hamburg',
  DUSSELDORF = 'Dusseldorf',
}

export enum SortType {
  POPULAR = 'Popular',
  PRICE_HIGH_TO_LOW = 'Price: high to low',
  PRICE_LOW_TO_HIGH = 'Price: low to high',
  TOP_RATED_FIRST = 'Top rated first',
}
