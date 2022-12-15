import { NO_ACTIVE_CARD } from '~/constants';
import { Offer } from '~/types';

const addOffer = (offers: Offer[], updatedOffer: Offer): Offer[] => {
  const updatedOffers = [...offers, updatedOffer];
  return updatedOffers;
};

const removeOffer = (offers: Offer[], updatedOffer: Offer): Offer[] => {
  const index = offers.findIndex(({ id }) => id === updatedOffer.id);

  if (index === NO_ACTIVE_CARD) {
    throw new Error("Can't remove unexisting offer");
  }

  const updatedOffers = [...offers.slice(0, index), ...offers.slice(index + 1)];
  return updatedOffers;
};

export const updateOffers = (offers: Offer[], updatedOffer: Offer): Offer[] => {
  const index = offers.findIndex(({ id }) => id === updatedOffer.id);

  if (index === NO_ACTIVE_CARD) {
    throw new Error("Can't update unexisting offer");
  }

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
    ? addOffer(offers, updatedOffer)
    : removeOffer(offers, updatedOffer);

  return updatedOffers;
};
