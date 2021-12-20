import { TOffer, TOffers } from '../types/offer';
import { SortType } from '../const';

const sortByPriceHighToLow = (firstOffer: TOffer, secondOffer: TOffer): number => (
  secondOffer.price - firstOffer.price
);

const sortByPriceLowToHigh = (firstOffer: TOffer, secondOffer: TOffer): number => (
  firstOffer.price - secondOffer.price
);

const topRatedFirst = (firstOffer: TOffer, secondOffer: TOffer): number => (
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
