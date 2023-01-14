import { State } from '~/store/slices/offers/types';
import { Offer } from '~/types/offer';
import { error, makeOffer } from '~/utils/mock-data';

const offer = makeOffer({ isFavorite: true });
export const updatedOffer: Offer = { ...offer, isFavorite: false };
const offers: Offer[] = [offer];
const updatedOffers: Offer[] = [updatedOffer];

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
  error: error.message,
};
