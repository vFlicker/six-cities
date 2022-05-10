import { SortType } from '@/constants';
import { Offer, SortType as TSortType } from '@/types';

const sortByPriceHighToLow = (firstOffer: Offer, secondOffer: Offer): number => (
  secondOffer.price - firstOffer.price
);

const sortByPriceLowToHigh = (firstOffer: Offer, secondOffer: Offer): number => (
  firstOffer.price - secondOffer.price
);

const topRatedFirst = (firstOffer: Offer, secondOffer: Offer): number => (
  secondOffer.rating - firstOffer.rating
);

export const sortOffers = (offers: Offer[], currentSortType: TSortType): Offer[] => {
  const copiedOffers = [...offers];

  switch (currentSortType) {
    case SortType.PRICE_HIGH_TO_LOW:
      return copiedOffers.sort(sortByPriceHighToLow);
    case SortType.PRICE_LOW_TO_HIGH:
      return copiedOffers.sort(sortByPriceLowToHigh);
    case SortType.TOP_RATED_FIRST:
      return copiedOffers.sort(topRatedFirst);
    default:
      return copiedOffers;
  }
};
