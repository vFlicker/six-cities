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

export enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export const cityNames = Object.values(CityName);

export const enum FavoriteStatus {
  Add = 1,
  Remove = 0,
}

export const NO_ACTIVE_CARD = -1;

export const enum Reducer {
  App = 'APP',
  Review = 'REVIEW',
  Offer = 'OFFER',
  Offers = 'OFFERS',
  User = 'USER',
}

export enum SortType {
  Popular = 'Popular',
  PriceHighToLow = 'Price: high to low',
  PriceLowToHigh = 'Price: low to high',
  TopRatedFirst = 'Top rated first',
}
