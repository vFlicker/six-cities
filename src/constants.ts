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

export const enum FavoriteStatus {
  Add = 1,
  Remove = 0,
}

export const enum HttpCode {
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
}

export enum SortType {
  Popular = 'Popular',
  PriceHighToLow = 'Price: high to low',
  PriceLowToHigh = 'Price: low to high',
  TopRatedFirst = 'Top rated first',
}

export const enum Reducer {
  App = 'APP',
  Comments = 'COMMENTS',
  Offer = 'OFFER',
  Offers = 'OFFERS',
  User = 'USER',
}
