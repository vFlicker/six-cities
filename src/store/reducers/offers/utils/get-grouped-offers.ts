import { GroupedOffers, Offer } from '@/types';

export const getGroupedOffers = (offers: Offer[]): GroupedOffers => {
  const combinedOffers: GroupedOffers = {};

  offers.forEach((offer) => {
    const cityName = offer.city.name;

    if (!combinedOffers[cityName]) {
      combinedOffers[cityName] = [];
    }

    combinedOffers[cityName].push(offer);
  });

  return combinedOffers;
};
