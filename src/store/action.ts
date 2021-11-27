import { Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';

import Adapter from '../services/adapter';
import { TState } from './reducer';
import ApiError from '../errors';
import {
  TAuthData,
  TOffer,
  TOfferServer,
  TUser,
} from '../types';
import {
  ApiRoute,
  CityName,
  SortType,
} from '../const';

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

export type TDispatch = ThunkDispatch<TState, AxiosInstance, Action>;
export type TThunk = ThunkAction<void, TState, AxiosInstance, Action>;

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
  fetchOffers: (): TThunk => (dispatch, _getState, apiService) => {
    dispatch(ActionCreator.offersRequested());

    apiService.get<TOfferServer[]>(`${ApiRoute.HOTELS}`)
      .then(({ data }) => data.map(Adapter.transformOffer))
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
  login: (authData: TAuthData): TThunk => (dispatch, _getState, apiService) => {
    dispatch(ActionCreator.loginRequest());

    apiService.post<TUser>(ApiRoute.LOGIN, authData)
      .then(({ data }) => Adapter.transformUser(data))
      .then((userData) => dispatch(ActionCreator.loginSuccess(userData)))
      .catch((err: ApiError) => dispatch(ActionCreator.loginFailure(err)));
  },
};
