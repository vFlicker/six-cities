import { Offer } from '~/types';

const addOffers = (offers: Offer[], updatedOffer: Offer): Offer[] => {
  const updatedOffers = [...offers, updatedOffer];
  return updatedOffers;
};

const removeOffers = (offers: Offer[], updatedOffer: Offer): Offer[] => {
  const index = offers.findIndex(({ id }) => id === updatedOffer.id);

  const updatedOffers = [...offers.slice(0, index), ...offers.slice(index + 1)];
  return updatedOffers;
};

export const updateOffers = (offers: Offer[], updatedOffer: Offer): Offer[] => {
  const index = offers.findIndex(({ id }) => id === updatedOffer.id);

  const updatedOffers = [
    ...offers.slice(0, index),
    updatedOffer,
    ...offers.slice(index + 1),
  ];

  return updatedOffers;
};

export const updateFavorites = (
  offers: Offer[],
  updatedOffer: Offer,
): Offer[] => {
  const updatedOffers = updatedOffer.isFavorite
    ? addOffers(offers, updatedOffer)
    : removeOffers(offers, updatedOffer);

  return updatedOffers;
};
