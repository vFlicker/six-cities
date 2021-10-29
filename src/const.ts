export enum AppRoute {
  FAVORITES = '/favorites',
  LOGIN = '/login',
  OFFERS = '/offers/:id',
  ROOT = '/'
}

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
  PRICE_LOW_TO_HIGH = 'Price: low to high',
  PRICE_HIGH_TO_LOW = 'Price: high to low',
  TOP_RATED_FIRST = 'Top rated first',
}
