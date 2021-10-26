import { CityName, OfferListItem } from '../types';

const getOffers = (city: CityName, offers: OfferListItem[]) => offers
  .filter((offer) => offer.city.name === city);

export enum ActionType {
  CHANGE_CITY = 'CHANGE_CITY',
  SET_OFFERS = 'SET_OFFERS',
}

export const ActionCreator = {
  changeCity: (city: CityName): {type: ActionType, payload: CityName} => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  setOffers: (
    city: CityName, offers: OfferListItem[],
  ): {type: ActionType, payload: OfferListItem[]} => ({
    type: ActionType.SET_OFFERS,
    payload: getOffers(city, offers),
  }),
};
