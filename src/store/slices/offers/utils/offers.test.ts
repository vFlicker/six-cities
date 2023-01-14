import { Offer } from '~/types/offer';
import { makeOffer } from '~/utils/mock-data';

import { updateFavorites, updateOffers } from './offers';

describe('Module: offers', () => {
  describe('updateOffers', () => {
    const firstOffer = makeOffer({ description: 'description 1' });
    const secondOffer = makeOffer({ description: 'description 2' });
    const updatedFirstOffer: Offer = {
      ...firstOffer,
      description: 'updated description 1',
    };

    it('should update offers when given a updated offer', () => {
      const result = updateOffers([firstOffer, secondOffer], updatedFirstOffer);
      expect(result).toEqual([updatedFirstOffer, secondOffer]);
    });

    it('should return no updated offers when given a unknown offer', () => {
      const result = updateOffers([firstOffer], secondOffer);
      expect(result).toEqual([firstOffer]);
    });
  });

  describe('updateFavorites', () => {
    const truthyFirstOffer = makeOffer({ isFavorite: true });
    const falsyFirstOffer: Offer = { ...truthyFirstOffer, isFavorite: false };
    const truthySecondOffer = makeOffer({ isFavorite: true });
    const falsySecondOffer: Offer = { ...truthySecondOffer, isFavorite: false };

    it('should add offer when property "isFavorite" change to "true"', () => {
      const result = updateFavorites([], truthyFirstOffer);
      expect(result).toEqual([truthyFirstOffer]);
    });

    it('should remove offer when property "isFavorite" change to "false"', () => {
      const result = updateFavorites(
        [truthyFirstOffer, truthySecondOffer],
        falsyFirstOffer,
      );

      expect(result).toEqual([truthySecondOffer]);
    });

    it('should noе update offers when given a unknown offer with property "isFavorite" setted to "false"', () => {
      const result = updateFavorites([truthyFirstOffer], falsySecondOffer);
      expect(result).toEqual([truthyFirstOffer]);
    });
  });
});
