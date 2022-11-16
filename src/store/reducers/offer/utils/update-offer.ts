import { Offer } from '~/types';

import { State } from '../types';

const update = (offers: Offer[], newOffer: Offer): void => {
  const index = offers.findIndex(({ id }) => id === newOffer.id);
  offers.splice(index, 1, newOffer);
};

export const updateOffer = (state: State, newOffer: Offer): void => {
  const { favorites, nearby, offer, offers } = state;

  const city = newOffer.city.name.toLocaleLowerCase();

  if (favorites[city]) {
    update(favorites[city], newOffer);
  }

  if (offers && offers[city]) {
    update(offers[city], newOffer);
  }

  if (nearby.length) {
    update(nearby, newOffer);
  }

  if (offer) {
    state.offer = newOffer;
  }
};
