import { CityName, OfferListItem } from '../types';
import { offers as fetchOffers } from '../mocks';
import { ActionType } from './action';

export type TState = {
  city: CityName,
  offers: OfferListItem[],
  filteredOffers: OfferListItem[],
};

type TAction = {
  type: ActionType,
  payload: CityName,
};

const getOffers = (offers: OfferListItem[], city: CityName) => offers
  .filter((offer) => offer.city.name === city)
  .slice(0, 6);

const initialState: TState = {
  city: 'Amsterdam',
  offers: fetchOffers,
  filteredOffers: getOffers(fetchOffers, 'Amsterdam'),
};

export const reducer = (state = initialState, action: TAction): TState => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.SET_OFFERS:
      return {
        ...state,
        filteredOffers: getOffers(state.offers, action.payload),
      };
    default:
  }

  return state;
};
