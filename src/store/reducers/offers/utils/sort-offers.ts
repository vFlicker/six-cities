import { SortType } from '@/constants';
import { Offer, SortType as TSortType } from '@/types';

const sortByPriceHighToLow = (firstOffer: Offer, secondOffer: Offer): number =>
  secondOffer.price - firstOffer.price;

const sortByPriceLowToHigh = (firstOffer: Offer, secondOffer: Offer): number =>
  firstOffer.price - secondOffer.price;

const topRatedFirst = (firstOffer: Offer, secondOffer: Offer): number =>
  secondOffer.rating - firstOffer.rating;

export const sortOffers = (
  offers: Offer[],
  currentSortType: TSortType,
): Offer[] => {
  const clonedOffers = [...offers];

  switch (currentSortType) {
    case SortType.PRICE_HIGH_TO_LOW:
      return clonedOffers.sort(sortByPriceHighToLow);
    case SortType.PRICE_LOW_TO_HIGH:
      return clonedOffers.sort(sortByPriceLowToHigh);
    case SortType.TOP_RATED_FIRST:
      return clonedOffers.sort(topRatedFirst);
    default:
      return clonedOffers;
  }
};
