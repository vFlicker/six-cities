import { Offer } from '~/types';
import { makeOffer } from '~/utils';

import { updateFavorites, updateOffers } from './offers';

const offer1 = makeOffer();
const offer2 = makeOffer();
const offer3 = makeOffer();

describe('Module: offers', () => {
  describe('updateOffers', () => {
    it('should update offers by a given new offer', () => {
      const offers = [offer1, offer2, offer3];

      const updatedOffer1: Offer = {
        ...offer1,
        description: 'fake_description',
      };

      const updatedOffer2: Offer = {
        ...offer2,
        description: 'fake_description',
      };

      const updatedOffer3: Offer = {
        ...offer3,
        description: 'fake_description',
      };

      expect(updateOffers(offers, updatedOffer1)).toEqual([
        updatedOffer1,
        offer2,
        offer3,
      ]);

      expect(updateOffers(offers, updatedOffer2)).toEqual([
        offer1,
        updatedOffer2,
        offer3,
      ]);

      expect(updateOffers(offers, updatedOffer3)).toEqual([
        offer1,
        offer2,
        updatedOffer3,
      ]);
    });

    it('should throw error if offer is unexisting', () => {
      expect(() => updateOffers([offer1, offer2], offer3)).toThrow(
        "Can't update unexisting offer",
      );

      expect(() => updateOffers([], offer1)).toThrow(
        "Can't update unexisting offer",
      );
    });
  });

  describe('updateFavorites', () => {
    it('should add offer to favorites', () => {
      const offer3 = makeOffer({ isFavorite: true });

      expect(updateFavorites([offer1, offer2], offer3)).toEqual([
        offer1,
        offer2,
        offer3,
      ]);

      expect(updateFavorites([], offer3)).toEqual([offer3]);
    });

    it('should remove offer from favorites', () => {
      const offer3 = makeOffer({ isFavorite: true });
      const offers: Offer[] = [offer1, offer2, offer3];
      const updatedOffer3: Offer = { ...offer3, isFavorite: false };

      expect(updateFavorites(offers, updatedOffer3)).toEqual([offer1, offer2]);
    });

    it('should throw error instead of removing if offer is unexisting', () => {
      const offer3 = makeOffer({ isFavorite: false });

      expect(() => updateFavorites([offer1, offer2], offer3)).toThrow(
        "Can't remove unexisting offer",
      );

      expect(() => updateFavorites([], offer3)).toThrow(
        "Can't remove unexisting offer",
      );
    });
  });
});
