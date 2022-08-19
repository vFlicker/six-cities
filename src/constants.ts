export const enum AppRoute {
  Favorites = '/favorites',
  Login = '/login',
  Offer = '/offers/:id',
  Root = '/',
}

export const enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const CityName = {
  PARIS: 'Paris',
  COLOGNE: 'Cologne',
  BRUSSELS: 'Brussels',
  AMSTERDAM: 'Amsterdam',
  HAMBURG: 'Hamburg',
  DUSSELDORF: 'Dusseldorf',
} as const;

export const FavoriteStatus = {
  FAVORITE: 1,
  NOT_FAVORITE: 0,
} as const;

export const HttpCode = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
};

export const SortType = {
  POPULAR: 'Popular',
  PRICE_HIGH_TO_LOW: 'Price: high to low',
  PRICE_LOW_TO_HIGH: 'Price: low to high',
  TOP_RATED_FIRST: 'Top rated first',
} as const;
