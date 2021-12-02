import { createAction } from '@reduxjs/toolkit';
import { ActionType, CityName, SortType } from '../const';
import ApiError from '../errors';
import { TOffer } from '../types/offer';
import { TUser } from '../types/user';

export const changeCityName = createAction(
  ActionType.CHANGE_CITY_NAME,
  (cityName: CityName) => ({
    payload: cityName,
  }),
);

export const changeSortType = createAction(
  ActionType.CHANGE_SORT_TYPE,
  (sortType: SortType) => ({
    payload: sortType,
  }),
);

export const checkAuthStatusRequest = createAction(ActionType.CHECK_AUTH_STATUS_REQUEST);

export const checkAuthStatusSuccess = createAction(
  ActionType.CHECK_AUTH_STATUS_SUCCESS,
  (userData: TUser) => ({
    payload: userData,
  }),
);

export const checkAuthStatusFailure = createAction(
  ActionType.CHECK_AUTH_STATUS_FAILURE,
  (error: ApiError) => ({
    payload: error,
  }),
);

export const setActiveCard = createAction(
  ActionType.SET_ACTIVE_CARD,
  (cardId: number) => ({
    payload: cardId,
  }),
);

export const offersRequested = createAction(ActionType.FETCH_OFFERS_REQUEST);

export const offersLoaded = createAction(
  ActionType.FETCH_OFFERS_SUCCESS,
  (offers: TOffer[]) => ({
    payload: offers,
  }),
);

export const offersError = createAction(
  ActionType.FETCH_OFFERS_FAILURE,
  (error: ApiError) => ({
    payload: error,
  }),
);

export const loginRequest = createAction(ActionType.LOGIN_REQUEST);

export const loginSuccess = createAction(
  ActionType.LOGIN_SUCCESS,
  (userData: TUser) => ({
    payload: userData,
  }),
);

export const loginFailure = createAction(
  ActionType.LOGIN_FAILURE,
  (error: ApiError) => ({
    payload: error,
  }),
);
