export enum APIRoute {
  Comments = '/comments',
  Favorites = '/favorites',
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
}

export enum AppRoute {
  Favorites = '/favorites',
  Login = '/login',
  Offer = '/offers/:id',
  Root = '/',
}

export enum AuthorizationStatus {
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

export enum ReducerName {
  AppProcess = 'APP_PROCESS',
  OfferData = 'OFFER_DATA',
  OffersData = 'OFFERS_DATA',
  OffersNearbyData = 'OFFERS_NEARBY_DATA',
  UserProcess = 'USER_PROCESS',
}

export enum SortType {
  Popular = 'Popular',
  PriceHighToLow = 'Price: high to low',
  PriceLowToHigh = 'Price: low to high',
  TopRatedFirst = 'Top rated first',
}
