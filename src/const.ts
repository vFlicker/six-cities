export enum ActionType {
  CHANGE_CITY_NAME = 'CHANGE_CITY_NAME',
  CHANGE_SORT_TYPE = 'CHANGE_SORT_TYPE',
  SET_ACTIVE_CARD = 'SET_ACTIVE_CARD',

  FETCH_OFFERS_REQUEST = 'FETCH_OFFERS_REQUEST',
  FETCH_OFFERS_SUCCESS = 'FETCH_OFFERS_SUCCESS',
  FETCH_OFFERS_FAILURE = 'FETCH_OFFERS_FAILURE',

  CHECK_AUTH_STATUS_REQUEST = 'CHECK_AUTH_STATUS_REQUEST',
  CHECK_AUTH_STATUS_SUCCESS = 'CHECK_AUTH_STATUS_SUCCESS',
  CHECK_AUTH_STATUS_FAILURE = 'CHECK_AUTH_STATUS_FAILURE',

  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
}

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
  ROOT = '/',
}

export enum AuthorizationStatus {
  AUTH = 'AUTH',
  NO_AUTH = 'NO_AUTH',
  UNKNOWN = 'UNKNOWN',
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
  PRICE_HIGH_TO_LOW = 'Price: high to low',
  PRICE_LOW_TO_HIGH = 'Price: low to high',
  TOP_RATED_FIRST = 'Top rated first',
}
