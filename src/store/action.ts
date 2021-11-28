import {
  CityName,
  SortType,
} from '../const';
import ApiError from '../errors';
import {
  TOffer,
  TUser,
} from '../types';

export enum ActionType {
  CHANGE_CITY_NAME = 'CHANGE_CITY_NAME',
  CHANGE_SORT_TYPE = 'CHANGE_SORT_TYPE',
  SET_ACTIVE_CARD = 'SET_ACTIVE_CARD',

  FETCH_OFFERS_REQUEST = 'FETCH_OFFERS_REQUEST',
  FETCH_OFFERS_SUCCESS = 'FETCH_OFFERS_SUCCESS',
  FETCH_OFFERS_FAILURE = 'FETCH_OFFERS_FAILURE',

  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
}

export const changeCityName = (cityName: CityName): {type: ActionType, payload: CityName} => ({
  type: ActionType.CHANGE_CITY_NAME,
  payload: cityName,
});

export const changeSortType = (sortType: SortType): {type: ActionType, payload: SortType} => ({
  type: ActionType.CHANGE_SORT_TYPE,
  payload: sortType,
});

export const setActiveCard = (cardId: number): {type: ActionType, payload: number} => ({
  type: ActionType.SET_ACTIVE_CARD,
  payload: cardId,
});

export const offersRequested = (): {type: ActionType} => ({
  type: ActionType.FETCH_OFFERS_REQUEST,
});

export const offersLoaded = (offers: TOffer[]): {type: ActionType, payload: TOffer[]} => ({
  type: ActionType.FETCH_OFFERS_SUCCESS,
  payload: offers,
});

export const offersError = (error: ApiError): {type: ActionType, payload: ApiError} => ({
  type: ActionType.FETCH_OFFERS_FAILURE,
  payload: error,
});

export const loginRequest = (): {type: ActionType} => ({
  type: ActionType.LOGIN_REQUEST,
});

export const loginSuccess = (userData: TUser): {type: ActionType, payload: TUser} => ({
  type: ActionType.LOGIN_SUCCESS,
  payload: userData,
});

export const loginFailure = (error: ApiError): {type: ActionType, payload: ApiError} => ({
  type: ActionType.LOGIN_FAILURE,
  payload: error,
});
