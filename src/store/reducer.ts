import { ActionType } from './action';
import { CityName, SortType } from '../const';
import { OfferListItem } from '../types';
import { sortByPriceHighToLow, sortByPriceLowToHigh, topRatedFirst } from '../utils';
import { offers as fetchOffers } from '../mocks';

export type TState = {
  currentCityName: CityName,
  currentSortType: SortType,
  offers: OfferListItem[],
};

type TAction = {
  type: ActionType.CHANGE_CITY_NAME,
  payload: CityName,
} | {
  type: ActionType.CHANGE_SORT_TYPE,
  payload: SortType,
} | {
  type: ActionType.SET_OFFERS,
  payload: CityName,
};

const getOffers = (state: TState, offers: OfferListItem[]) => {
  const { currentCityName, currentSortType } = state;

  const filteredOffers = offers
    .filter((offer) => offer.city.name === currentCityName)
    .slice(0, 6);

  switch (currentSortType) {
    case SortType.PRICE_HIGH_TO_LOW:
      return filteredOffers.sort(sortByPriceHighToLow);
    case SortType.PRICE_LOW_TO_HIGH:
      return filteredOffers.sort(sortByPriceLowToHigh);
    case SortType.TOP_RATED_FIRST:
      return filteredOffers.sort(topRatedFirst);
    default:
      return filteredOffers;
  }
};

const initialState: TState = {
  currentCityName: CityName.AMSTERDAM,
  currentSortType: SortType.POPULAR,
  offers: fetchOffers,
};

export const reducer = (state = initialState, action: TAction): TState => {
  switch (action.type) {
    case ActionType.CHANGE_CITY_NAME:
      return {
        ...state,
        currentCityName: action.payload,
      };
    case ActionType.CHANGE_SORT_TYPE:
      return {
        ...state,
        currentSortType: action.payload,
      };
    case ActionType.SET_OFFERS:
      return {
        ...state,
        offers: getOffers(state, fetchOffers),
      };
    default:
      return state;
  }
};
