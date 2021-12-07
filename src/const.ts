export enum APIRoute {
  Comments = '/comments',
  Favorites = '/favorites',
  Hotels = '/hotels',
  Login = '/login',
  Logout = '/logout',
}

export enum AppRoute {
  Favorites = '/favorites',
  Login = '/login',
  Offers = '/offers/:id',
  Root = '/',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum CardType {
  Cities = 'cities',
  Favorites = 'favorites',
  NearPlaces = 'near-places',
}

export enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export enum ReducerName {
  AppProcess = 'APP_PROCESS',
  OffersData = 'OFFERS_DATA',
  UserProcess = 'USER_PROCESS',
}

export enum SortType {
  Popular = 'Popular',
  PriceHighToLow = 'Price: high to low',
  PriceLowToHigh = 'Price: low to high',
  TopRatedFirst = 'Top rated first',
}
