import { Offer } from '~/types';
import { makeOffer } from '~/utils';

import { updateFavorites, updateOffers } from './offers';

describe('Module: offers', () => {
  describe('updateOffers', () => {
    const firstOffer = makeOffer({ isFavorite: false });
    const secondOffer = makeOffer({ isFavorite: false });
    const updatedFirstOffer: Offer = { ...firstOffer, isFavorite: true };
    const updatedSecondOffer: Offer = { ...secondOffer, isFavorite: true };

    it('should update offers when given a updated offer', () => {
      expect(
        updateOffers([firstOffer, secondOffer], updatedFirstOffer),
      ).toEqual([updatedFirstOffer, secondOffer]);

      expect(
        updateOffers([firstOffer, secondOffer], updatedSecondOffer),
      ).toEqual([firstOffer, updatedSecondOffer]);
    });

    it('should return no updated offers when given a unknown offer', () => {
      expect(updateOffers([firstOffer], secondOffer)).toEqual([firstOffer]);
      expect(updateOffers([], firstOffer)).toEqual([]);
    });
  });

  describe('updateFavorites', () => {
    const truthyFirstOffer = makeOffer({ isFavorite: true });
    const falsyFirstOffer: Offer = { ...truthyFirstOffer, isFavorite: false };
    const truthySecondOffer = makeOffer({ isFavorite: true });
    const falsySecondOffer: Offer = { ...truthySecondOffer, isFavorite: false };

    it('should add offer when status isFavorite change to true', () => {
      expect(updateFavorites([], truthyFirstOffer)).toEqual([truthyFirstOffer]);

      expect(updateFavorites([truthyFirstOffer], truthySecondOffer)).toEqual([
        truthyFirstOffer,
        truthySecondOffer,
      ]);
    });

    it('should remove offer from favorites', () => {
      expect(
        updateFavorites([truthyFirstOffer, truthySecondOffer], falsyFirstOffer),
      ).toEqual([truthySecondOffer]);

      expect(
        updateFavorites(
          [truthyFirstOffer, truthySecondOffer],
          falsySecondOffer,
        ),
      ).toEqual([truthyFirstOffer]);
    });

    it('should return no updated offers when given a unknown falsy offer', () => {
      expect(updateFavorites([truthyFirstOffer], falsySecondOffer)).toEqual([
        truthyFirstOffer,
      ]);

      expect(updateFavorites([], falsySecondOffer)).toEqual([]);
    });
  });
});
