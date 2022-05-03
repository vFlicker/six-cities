import { Offer } from '@/types';
import { SortType } from '@/constants';

const sortByPriceHighToLow = (firstOffer: Offer, secondOffer: Offer): number => (
  secondOffer.price - firstOffer.price
);

const sortByPriceLowToHigh = (firstOffer: Offer, secondOffer: Offer): number => (
  firstOffer.price - secondOffer.price
);

const topRatedFirst = (firstOffer: Offer, secondOffer: Offer): number => (
  secondOffer.rating - firstOffer.rating
);

export const sortOffers = (offers: Offer[], currentSortType: SortType): Offer[] => {
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
