import { Dispatch } from 'redux';
import { CityName, SortType } from '../const';
import { TOffer } from '../types';
import ApiService from '../services/api-service';

export enum ActionType {
  CHANGE_CITY_NAME = 'CHANGE_CITY_NAME',
  CHANGE_SORT_TYPE = 'CHANGE_SORT_TYPE',
  SET_ACTIVE_CARD = 'SET_ACTIVE_CARD',
  SET_OFFERS = 'SET_OFFERS',
  FETCH_OFFERS_REQUEST = 'FETCH_OFFERS_REQUEST',
  FETCH_OFFERS_SUCCESS = 'FETCH_OFFERS_SUCCESS',
  FETCH_OFFERS_FAILURE = 'FETCH_OFFERS_FAILURE',
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
  setOffers: (): {type: ActionType} => ({
    type: ActionType.SET_OFFERS,
  }),
  offersRequested: (): {type: ActionType} => ({
    type: ActionType.FETCH_OFFERS_REQUEST,
  }),
  offersLoaded: (offers: TOffer[]): {type: ActionType, payload: TOffer[]} => ({
    type: ActionType.FETCH_OFFERS_SUCCESS,
    payload: offers,
  }),
  offersError: (error: string): {type: ActionType, payload: string} => ({
    type: ActionType.FETCH_OFFERS_FAILURE,
    payload: error,
  }),
  fetchOffers: (apiService: ApiService, dispatch: Dispatch) => (): void => {
    dispatch(ActionCreator.offersRequested());
    apiService.getHotels()
      .then((data) => dispatch(ActionCreator.offersLoaded(data)))
      .catch((err) => dispatch(ActionCreator.offersError(err)));
  },
};
