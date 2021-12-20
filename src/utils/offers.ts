import { TGroupedOffers, TOffers } from '../types/offer';

export const getGroupedOffers = (offers: TOffers): TGroupedOffers => {
  const combinedOffers: TGroupedOffers = {};

  offers.forEach((offer) => {
    const cityName = offer.city.name;

    if (!combinedOffers[cityName]) {
      combinedOffers[cityName] = [];
    }

    combinedOffers[cityName].push(offer);
  });

  return combinedOffers;
};
