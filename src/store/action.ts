import { CityName } from '../types';

export enum ActionType {
  CHANGE_CITY = 'CHANGE_CITY',
  SET_OFFERS = 'SET_OFFERS',
}

export const ActionCreator = {
  changeCity: (city: CityName): {type: ActionType, payload: CityName} => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  setOffers: (city: CityName): {type: ActionType, payload: CityName} => ({
    type: ActionType.SET_OFFERS,
    payload: city,
  }),
};
