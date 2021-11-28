import ApiError from '../errors';
import {
  ActionType,
  changeCityName,
  changeSortType,
  loginFailure,
  loginRequest,
  loginSuccess,
  offersError,
  offersLoaded,
  offersRequested,
  setActiveCard,
} from './action';
import { AuthorizationStatus, CityName, SortType } from '../const';
import { TOffer, TUser } from '../types';
import { sortByPriceHighToLow, sortByPriceLowToHigh, topRatedFirst } from '../utils';

export type TState = {
  activeCardId: number,
  currentCityName: CityName,
  currentSortType: SortType,
  offers: TOffer[],
  loading: boolean,
  error: null | ApiError,
  authorizationStatus: AuthorizationStatus,
  user: TUser | null
}

type TAction =
  | ReturnType<typeof changeCityName>
  | ReturnType<typeof changeSortType>
  | ReturnType<typeof setActiveCard>
  | ReturnType<typeof offersRequested>
  | ReturnType<typeof offersLoaded>
  | ReturnType<typeof offersError>
  | ReturnType<typeof loginRequest>
  | ReturnType<typeof loginSuccess>
  | ReturnType<typeof loginFailure>;

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

export const reducer = (state = initialState, action: TAction): TState => {
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
