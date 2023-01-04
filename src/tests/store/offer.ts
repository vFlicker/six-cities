import { State } from '~/store/slices/offer/types';
import { Offer } from '~/types';
import { error, makeOffer } from '~/utils';

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
  error,
};
