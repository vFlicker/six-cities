import { OffersDictionary, Offer } from '~/types';

export const createOffersDictionary = (offers: Offer[]): OffersDictionary => {
  const offersDictionary = {} as OffersDictionary;

  offers.forEach((offer) => {
    const cityName = offer.city.name.toLocaleLowerCase();

    if (!offersDictionary[cityName]) {
      offersDictionary[cityName] = [];
    }

    offersDictionary[cityName].push(offer);
  });

  return offersDictionary;
};
