import { ActionType, SortType } from '../../const';
import { NameSpace } from '../root-reducer';
import { TRootAction } from '../../types/action';
import { TOffer } from '../../types/offer';
import { TOfferDataState, TRootState } from '../../types/state';
import { sortByPriceHighToLow, sortByPriceLowToHigh, topRatedFirst } from '../../utils';

const getOffers = (state: TRootState, offers: TOffer[]) => {
  const { currentCityName, currentSortType } = state[NameSpace.APP_PROCESS];

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

const offerData = (state: TRootState, action: TRootAction): TOfferDataState => {
  switch (action.type) {
    case ActionType.FETCH_OFFERS_REQUEST:
      return {
        offers: [],
        loading: true,
        error: null,
      };
    case ActionType.FETCH_OFFERS_SUCCESS:
      return {
        offers: getOffers(state, action.payload),
        loading: false,
        error: null,
      };
    case ActionType.FETCH_OFFERS_FAILURE:
      return {
        offers: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state[NameSpace.OFFER_DATA];
  }
};

export default offerData;
