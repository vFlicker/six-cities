import { State } from '~/store/slices/offers/types';
import { Offer } from '~/types';
import { error, makeOffer } from '~/utils';

export const offer = makeOffer({ isFavorite: true });
export const updatedOffer: Offer = { ...offer, isFavorite: false };

export const initialState: State = {
  all: [],
  favorites: [],
  nearby: [],
  loading: false,
  error: null,
};

export const stateWithOffers: State = {
  ...initialState,
  all: [offer],
  favorites: [offer],
  nearby: [offer],
};

export const stateWitUpdatedOffers: State = {
  ...stateWithOffers,
  all: [updatedOffer],
  favorites: [],
  nearby: [updatedOffer],
};

export const loadingState: State = {
  ...initialState,
  loading: true,
};

export const rejectedState: State = {
  ...initialState,
  error,
};
