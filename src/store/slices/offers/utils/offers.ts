import { Offer } from '~/types';

export const updateOffers = (offers: Offer[], updatedOffer: Offer): Offer[] => {
  const index = offers.findIndex(({ id }) => id === updatedOffer.id);

  const updatedOffers = [
    ...offers.slice(0, index),
    updatedOffer,
    ...offers.slice(index + 1),
  ];

  return updatedOffers;
};
