import { Offer, PartialOffersByCity } from '~/types';

export const createFavoritesByCity = (offers: Offer[]): PartialOffersByCity => {
  const offersByCity: PartialOffersByCity = {};

  for (const offer of offers) {
    const cityName = offer.city.name;

    if (!offersByCity[cityName]) {
      offersByCity[cityName] = [];
    }

    offersByCity[cityName]?.push(offer);
  }

  return offersByCity;
};
