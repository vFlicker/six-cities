import { Offer, OffersDictionary } from '~/types';

export const updateOffers = (offers: Offer[], updatedOffer: Offer): Offer[] => {
  const index = offers.findIndex(({ id }) => updatedOffer.id === id);

  const updatedOffers = [
    ...offers.slice(0, index),
    updatedOffer,
    ...offers.slice(index + 1),
  ];

  return updatedOffers;
};

export const updateOffersDictionary = (
  offers: OffersDictionary | null,
  updatedOffer: Offer,
): OffersDictionary | null => {
  const cityName = updatedOffer.city.name;
  const key = cityName.toLocaleLowerCase();
  const offersByKey = offers && offers[key];

  if (!offersByKey) return offers;

  return {
    ...offers,
    [key]: updateOffers(offersByKey, updatedOffer),
  };
};
