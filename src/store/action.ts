import { CityName, SortType } from '../const';
import { TOffer } from '../types';

export enum ActionType {
  CHANGE_CITY_NAME = 'CHANGE_CITY_NAME',
  CHANGE_SORT_TYPE = 'CHANGE_SORT_TYPE',
  SET_ACTIVE_CARD = 'SET_ACTIVE_CARD',
  SET_OFFERS = 'SET_OFFERS',
  OFFERS_LOADED = 'OFFERS_LOADED',
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
  offersLoaded: (offers: TOffer[]): {type: ActionType, payload: TOffer[]} => ({
    type: ActionType.OFFERS_LOADED,
    payload: offers,
  }),
};
