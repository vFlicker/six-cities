import { TOffer } from './types/offer';

const MAX_PERCENT = 100;
const TOTAL_RATING = 5;

export const sortByPriceHighToLow = (
  firstOffer: TOffer,
  secondOffer: TOffer,
): number => secondOffer.price - firstOffer.price;

export const sortByPriceLowToHigh = (
  firstOffer: TOffer,
  secondOffer: TOffer,
): number => firstOffer.price - secondOffer.price;

export const topRatedFirst = (
  firstOffer: TOffer,
  secondOffer: TOffer,
): number => secondOffer.rating - firstOffer.rating;

export const convertRatingToPercents = (
  rating: number,
): string => `${(MAX_PERCENT * rating) / TOTAL_RATING}%`;
