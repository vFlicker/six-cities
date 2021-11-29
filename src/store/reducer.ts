import {
  ActionType,
  AuthorizationStatus,
  CityName,
  SortType,
} from '../const';
import { TAction } from '../types/action';
import { TOffer } from '../types/offer';
import { TState } from '../types/state';
import { sortByPriceHighToLow, sortByPriceLowToHigh, topRatedFirst } from '../utils';

const getOffers = (state: TState, offers: TOffer[]) => {
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
  activeCardId: -1,
  currentCityName: CityName.AMSTERDAM,
  currentSortType: SortType.POPULAR,
  offers: [],
  loading: true,
  error: null,
  authorizationStatus: AuthorizationStatus.AUTH,
  user: null,
};

const reducer = (state = initialState, action: TAction): TState => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_CARD:
      return {
        ...state,
        activeCardId: action.payload,
      };
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

    case ActionType.FETCH_OFFERS_REQUEST:
      return {
        ...state,
        offers: [],
        loading: true,
        error: null,
      };
    case ActionType.FETCH_OFFERS_SUCCESS:
      return {
        ...state,
        offers: getOffers(state, action.payload),
        loading: false,
        error: null,
      };
    case ActionType.FETCH_OFFERS_FAILURE:
      return {
        ...state,
        offers: [],
        loading: false,
        error: action.payload,
      };

    case ActionType.LOGIN_REQUEST:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.UNKNOWN,
        user: null,
        loading: true,
        error: null,
      };
    case ActionType.LOGIN_SUCCESS:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.AUTH,
        user: action.payload,
        loading: false,
        error: null,
      };
    case ActionType.LOGIN_FAILURE:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        user: null,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
