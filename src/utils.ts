import { AuthorizationStatus, SortType } from './const';
import { TGroupedOffers, TOffer, TOffers } from './types/offer';

const MAX_PERCENT = 100;
const TOTAL_RATING = 5;

export const convertRatingToPercents = (rating: number): string => (
  `${(MAX_PERCENT * rating) / TOTAL_RATING}%`
);

export const getGroupedOffers = (offers: TOffers): TGroupedOffers => {
  const combinedOffers: TGroupedOffers = {};

  offers.forEach((offer) => {
    const cityName = offer.city.name;

    if (!combinedOffers[cityName]) {
      combinedOffers[cityName] = [];
    }

    combinedOffers[cityName].push(offer);
  });

  return combinedOffers;
};

export const sortByPriceHighToLow = (firstOffer: TOffer, secondOffer: TOffer): number => (
  secondOffer.price - firstOffer.price
);

export const sortByPriceLowToHigh = (firstOffer: TOffer, secondOffer: TOffer): number => (
  firstOffer.price - secondOffer.price
);

export const topRatedFirst = (firstOffer: TOffer, secondOffer: TOffer): number => (
  secondOffer.rating - firstOffer.rating
);

export const sortOffers = (offers: TOffers, currentSortType: SortType): TOffers => {
  const copiedOffers = [...offers];

  switch (currentSortType) {
    case SortType.PriceHighToLow:
      return copiedOffers.sort(sortByPriceHighToLow);
    case SortType.PriceLowToHigh:
      return copiedOffers.sort(sortByPriceLowToHigh);
    case SortType.TopRatedFirst:
      return copiedOffers.sort(topRatedFirst);
    default:
      return copiedOffers;
  }
};

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean => (
  authorizationStatus === AuthorizationStatus.Unknown
);

export const isUserAuthorized = (authorizationStatus: AuthorizationStatus): boolean => (
  authorizationStatus === AuthorizationStatus.Auth
);
