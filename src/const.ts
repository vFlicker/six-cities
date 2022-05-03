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
  App = 'app',
  Offer = 'offer',
  Offers = 'offers',
  OffersFavorite = 'offersFavorite',
  OffersNearby = 'offersNearby',
  User = 'user',
}

export enum SortType {
  Popular = 'Popular',
  PriceHighToLow = 'Price: high to low',
  PriceLowToHigh = 'Price: low to high',
  TopRatedFirst = 'Top rated first',
}
