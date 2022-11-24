import { SortType } from '~/constants';
import { Offer } from '~/types';

const sortBy = {
  priceHighToLow: (firstOffer: Offer, secondOffer: Offer): number => {
    return secondOffer.price - firstOffer.price;
  },

  priceLowToHigh: (firstOffer: Offer, secondOffer: Offer): number => {
    return firstOffer.price - secondOffer.price;
  },

  topRatedFirst: (firstOffer: Offer, secondOffer: Offer): number => {
    return secondOffer.rating - firstOffer.rating;
  },
};

export const sortOffers = (offers: Offer[], sortType: SortType): Offer[] => {
  const clonedOffers = [...offers];

  switch (sortType) {
    case SortType.PriceHighToLow:
      return clonedOffers.sort(sortBy.priceHighToLow);
    case SortType.PriceLowToHigh:
      return clonedOffers.sort(sortBy.priceLowToHigh);
    case SortType.TopRatedFirst:
      return clonedOffers.sort(sortBy.topRatedFirst);
    default:
      return clonedOffers;
  }
};
