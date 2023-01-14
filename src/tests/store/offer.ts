import { State } from '~/store/slices/offer/types';
import { Offer } from '~/types/offer';
import { error, makeOffer } from '~/utils/mock-data';

type StateWithOffer = State & { offer: Offer };

const offer = makeOffer({ isPremium: true, isFavorite: true });
const updatedOffer: Offer = { ...offer, isPremium: false, isFavorite: false };

export const initialState: State = {
  offer: null,
  loading: false,
  error: null,
};

export const stateWithOffer: StateWithOffer = {
  ...initialState,
  offer,
};

export const stateWithUpdatedOffer: StateWithOffer = {
  ...initialState,
  offer: updatedOffer,
};

export const loadingState: State = {
  ...initialState,
  loading: true,
};

export const rejectedState: State = {
  ...initialState,
  error: error.message,
};
