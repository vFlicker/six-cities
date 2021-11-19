import { Dispatch } from 'redux';

import ApiService from '../services/api-service';
import ApiError from '../services/api-error';
import { TAuthData, TOffer, TUser } from '../types';
import { CityName, SortType } from '../const';

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

export const ActionCreator = {
  changeCityName: (cityName: CityName): {type: ActionType, payload: CityName} => ({
    type: ActionType.CHANGE_CITY_NAME,
    payload: cityName,
  }),
  changeSortType: (sortType: SortType): {type: ActionType, payload: SortType} => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: sortType,
  }),
  setActiveCard: (cardId: number): {type: ActionType, payload: number} => ({
    type: ActionType.SET_ACTIVE_CARD,
    payload: cardId,
  }),

  offersRequested: (): {type: ActionType} => ({
    type: ActionType.FETCH_OFFERS_REQUEST,
  }),
  offersLoaded: (offers: TOffer[]): {type: ActionType, payload: TOffer[]} => ({
    type: ActionType.FETCH_OFFERS_SUCCESS,
    payload: offers,
  }),
  offersError: (error: ApiError): {type: ActionType, payload: ApiError} => ({
    type: ActionType.FETCH_OFFERS_FAILURE,
    payload: error,
  }),
  fetchOffers: (apiService: ApiService, dispatch: Dispatch) => (): void => {
    dispatch(ActionCreator.offersRequested());
    apiService.getHotels()
      .then((data) => dispatch(ActionCreator.offersLoaded(data)))
      .catch((err: ApiError) => dispatch(ActionCreator.offersError(err)));
  },

  loginRequest: (): {type: ActionType} => ({
    type: ActionType.LOGIN_REQUEST,
  }),
  loginSuccess: (userData: TUser): {type: ActionType, payload: TUser} => ({
    type: ActionType.LOGIN_SUCCESS,
    payload: userData,
  }),
  loginFailure: (error: ApiError): {type: ActionType, payload: ApiError} => ({
    type: ActionType.LOGIN_FAILURE,
    payload: error,
  }),
  login: (apiService: ApiService, dispatch: Dispatch) => (authData: TAuthData): void => {
    dispatch(ActionCreator.loginRequest());
    apiService.login(authData)
      .then((userData) => dispatch(ActionCreator.loginSuccess(userData)))
      .catch((err: ApiError) => dispatch(ActionCreator.loginFailure(err)));
  },
};
