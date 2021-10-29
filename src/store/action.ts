import { CityName } from '../const';

export enum ActionType {
  CHANGE_CITY = 'CHANGE_CITY',
  SET_OFFERS = 'SET_OFFERS',
}

export const ActionCreator = {
  changeCity: (cityName: CityName): {type: ActionType, payload: CityName} => ({
    type: ActionType.CHANGE_CITY,
    payload: cityName,
  }),
  setOffers: (cityName: CityName): {type: ActionType, payload: CityName} => ({
    type: ActionType.SET_OFFERS,
    payload: cityName,
  }),
};
