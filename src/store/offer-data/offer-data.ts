import { ActionType, CityName, SortType } from '../../const';
import { TRootAction } from '../../types/action';
import { TOffer } from '../../types/offer';
import { TOfferDataState } from '../../types/state';
import { sortByPriceHighToLow, sortByPriceLowToHigh, topRatedFirst } from '../../utils';

const getOffers = (state: TOfferDataState, offers: TOffer[]) => {
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

const initialState: TOfferDataState = {
  currentCityName: CityName.AMSTERDAM,
  currentSortType: SortType.POPULAR,
  offers: [],
  loading: true,
  error: null,
};

const offerData = (state = initialState, action: TRootAction): TOfferDataState => {
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
    default:
      return state;
  }
};

export default offerData;
