import { OfferListItem } from './types';

const MAX_PERCENT = 100;
const TOTAL_RATING = 5;

export const sortByPriceHighToLow = (
  firstOffer: OfferListItem,
  secondOffer: OfferListItem,
): number => secondOffer.price - firstOffer.price;

export const sortByPriceLowToHigh = (
  firstOffer: OfferListItem,
  secondOffer: OfferListItem,
): number => firstOffer.price - secondOffer.price;

export const topRatedFirst = (
  firstOffer: OfferListItem,
  secondOffer: OfferListItem,
): number => secondOffer.rating - firstOffer.rating;

export const convertRatingToPercents = (
  rating: number,
): string => `${(MAX_PERCENT * rating) / TOTAL_RATING}%`;
