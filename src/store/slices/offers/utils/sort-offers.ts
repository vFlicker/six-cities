import { SortType } from '~/constants';
import { Offer } from '~/types';

const sortByPriceHighToLow = (firstOffer: Offer, secondOffer: Offer): number =>
  secondOffer.price - firstOffer.price;

const sortByPriceLowToHigh = (firstOffer: Offer, secondOffer: Offer): number =>
  firstOffer.price - secondOffer.price;

const topRatedFirst = (firstOffer: Offer, secondOffer: Offer): number =>
  secondOffer.rating - firstOffer.rating;

export const sortOffers = (
  offers: Offer[],
  currentSortType: SortType,
): Offer[] => {
  const clonedOffers = [...offers];

  switch (currentSortType) {
    case SortType.PriceHighToLow:
      return clonedOffers.sort(sortByPriceHighToLow);
    case SortType.PriceLowToHigh:
      return clonedOffers.sort(sortByPriceLowToHigh);
    case SortType.TopRatedFirst:
      return clonedOffers.sort(topRatedFirst);
    default:
      return clonedOffers;
  }
};
