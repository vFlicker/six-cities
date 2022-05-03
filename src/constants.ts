export const AppRoute = {
  FAVORITES: '/favorites',
  LOGIN: '/login',
  OFFER: '/offers/:id',
  ROOT: '/',
} as const;

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
} as const;

export const CityName = {
  PARIS: 'Paris',
  COLOGNE: 'Cologne',
  BRUSSELS: 'Brussels',
  AMSTERDAM: 'Amsterdam',
  HAMBURG: 'Hamburg',
  DUSSELDORF: 'Dusseldorf',
} as const;

export const SortType = {
  POPULAR: 'Popular',
  PRICE_HIGH_TO_LOW: 'Price: high to low',
  PRICE_LOW_TO_HIGH: 'Price: low to high',
  TOP_RATED_FIRST: 'Top rated first',
} as const;
