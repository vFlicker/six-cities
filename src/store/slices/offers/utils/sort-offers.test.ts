import { SortType } from '~/constants';
import { makeOffer } from '~/utils';

import { sortOffers } from './sort-offers';

const firstOffer = makeOffer({ price: 100, rating: 1 });
const secondOffer = makeOffer({ price: 1000, rating: 5 });
const thirdOffer = makeOffer({ price: 250, rating: 2 });

describe('sortOffers', () => {
  it('should sort offers by "PriceHighToLow" type', () => {
    const result = sortOffers(
      [firstOffer, secondOffer, thirdOffer],
      SortType.PriceHighToLow,
    );

    expect(result).toEqual([secondOffer, thirdOffer, firstOffer]);
  });

  it('should sort offers by "PriceLowToHigh" type', () => {
    const result = sortOffers(
      [firstOffer, secondOffer, thirdOffer],
      SortType.PriceLowToHigh,
    );

    expect(result).toEqual([firstOffer, thirdOffer, secondOffer]);
  });

  it('should sort offers by "TopRatedFirst" type', () => {
    const result = sortOffers(
      [firstOffer, secondOffer, thirdOffer],
      SortType.TopRatedFirst,
    );

    expect(result).toEqual([secondOffer, thirdOffer, firstOffer]);
  });

  it('should not mutation initial array', () => {
    const initialArray = [firstOffer, secondOffer, thirdOffer];

    sortOffers(initialArray, SortType.PriceHighToLow);
    sortOffers(initialArray, SortType.PriceLowToHigh);
    sortOffers(initialArray, SortType.TopRatedFirst);

    expect(initialArray).toEqual([firstOffer, secondOffer, thirdOffer]);
  });
});
