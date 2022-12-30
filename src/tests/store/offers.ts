import { State } from '~/store/slices/offers/types';
import { Offer } from '~/types';
import { error, makeOffer } from '~/utils';

export const offer = makeOffer();
export const updatedOffer: Offer = { ...offer, title: 'Updated title' };
export const offers: Offer[] = [offer];
export const updatedOffers: Offer[] = [updatedOffer];

export const initialState: State = {
  all: [],
  favorites: [],
  nearby: [],
  loading: false,
  error: null,
};

export const stateWithOffers: State = {
  ...initialState,
  all: offers,
  favorites: offers,
  nearby: offers,
};

export const stateWitUpdatedOffers: State = {
  ...stateWithOffers,
  all: updatedOffers,
  favorites: [],
  nearby: updatedOffers,
};

export const loadingState: State = {
  ...initialState,
  loading: true,
};

export const rejectedState: State = {
  ...initialState,
  error,
};
