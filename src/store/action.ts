import { ActionType, CityName, SortType } from '../const';
import ApiError from '../errors';
import { TOffer } from '../types/offer';
import { TUser } from '../types/user';

export const changeCityName = (cityName: CityName) => ({
  type: ActionType.CHANGE_CITY_NAME,
  payload: cityName,
} as const);

export const changeSortType = (sortType: SortType) => ({
  type: ActionType.CHANGE_SORT_TYPE,
  payload: sortType,
} as const);

export const checkAuthStatusRequest = () => ({
  type: ActionType.CHECK_AUTH_STATUS_REQUEST,
} as const);

export const checkAuthStatusSuccess = (userData: TUser) => ({
  type: ActionType.CHECK_AUTH_STATUS_SUCCESS,
  payload: userData,
} as const);

export const checkAuthStatusFailure = (error: ApiError) => ({
  type: ActionType.CHECK_AUTH_STATUS_FAILURE,
  payload: error,
} as const);

export const setActiveCard = (cardId: number) => ({
  type: ActionType.SET_ACTIVE_CARD,
  payload: cardId,
} as const);

export const offersRequested = () => ({
  type: ActionType.FETCH_OFFERS_REQUEST,
} as const);

export const offersLoaded = (offers: TOffer[]) => ({
  type: ActionType.FETCH_OFFERS_SUCCESS,
  payload: offers,
} as const);

export const offersError = (error: ApiError) => ({
  type: ActionType.FETCH_OFFERS_FAILURE,
  payload: error,
} as const);

export const loginRequest = () => ({
  type: ActionType.LOGIN_REQUEST,
} as const);

export const loginSuccess = (userData: TUser) => ({
  type: ActionType.LOGIN_SUCCESS,
  payload: userData,
} as const);

export const loginFailure = (error: ApiError) => ({
  type: ActionType.LOGIN_FAILURE,
  payload: error,
} as const);
