import { ActionType } from './action';
import { CityName } from '../const';
import { OfferListItem } from '../types';
import { offers as fetchOffers } from '../mocks';

export type TState = {
  currentCity: CityName,
  offers: OfferListItem[],
  filteredOffers: OfferListItem[],
};

type TAction = {
  type: ActionType,
  payload: CityName,
};

const getOffers = (offers: OfferListItem[], currentCity: CityName) => offers
  .filter((offer) => offer.city.name === currentCity)
  .slice(0, 6);

const initialState: TState = {
  currentCity: CityName.AMSTERDAM,
  offers: fetchOffers,
  filteredOffers: getOffers(fetchOffers, CityName.AMSTERDAM),
};

export const reducer = (state = initialState, action: TAction): TState => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        currentCity: action.payload,
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
