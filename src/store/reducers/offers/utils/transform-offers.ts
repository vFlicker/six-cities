import { Offers, Offer } from '@/types';

export const transformOffers = (offers: Offer[]): Offers => {
  const transformedOffers = {} as Offers;

  offers.forEach((offer) => {
    const cityName = offer.city.name;

    if (!transformedOffers[cityName]) {
      transformedOffers[cityName] = [];
    }

    transformedOffers[cityName].push(offer);
  });

  return transformedOffers;
};
