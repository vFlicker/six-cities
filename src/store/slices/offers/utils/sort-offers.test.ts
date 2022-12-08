import { SortType } from '~/constants';
import { makeOffer } from '~/utils';

import { sortOffers } from './sort-offers';

const offer1 = makeOffer({ price: 100, rating: 1 });
const offer2 = makeOffer({ price: 1000, rating: 5 });
const offer3 = makeOffer({ price: 250, rating: 2 });

describe('sortOffers', () => {
  it('should sort offers by price high to low type', () => {
    expect(
      sortOffers([offer1, offer2, offer3], SortType.PriceHighToLow),
    ).toEqual([offer2, offer3, offer1]);
  });

  it('should sort offers by price low to high type', () => {
    expect(
      sortOffers([offer1, offer2, offer3], SortType.PriceLowToHigh),
    ).toEqual([offer1, offer3, offer2]);
  });

  it('should sort offers by top rated first type', () => {
    expect(
      sortOffers([offer1, offer2, offer3], SortType.TopRatedFirst),
    ).toEqual([offer2, offer3, offer1]);
  });

  it("should't mutation initial array", () => {
    const initialArray = [offer1, offer2, offer3];

    sortOffers(initialArray, SortType.PriceHighToLow);
    sortOffers(initialArray, SortType.PriceLowToHigh);
    sortOffers(initialArray, SortType.TopRatedFirst);

    expect(initialArray).toEqual([offer1, offer2, offer3]);
  });
});
