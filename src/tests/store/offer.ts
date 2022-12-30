import { State } from '~/store/slices/offer/types';
import { Offer } from '~/types';
import { error, makeOffer } from '~/utils';

export const offer = makeOffer({ isPremium: true, isFavorite: true });
const updatedOffer: Offer = { ...offer, isPremium: false, isFavorite: false };

export const initialState: State = {
  offer: null,
  loading: false,
  error: null,
};

export const stateWithOffer: State = {
  ...initialState,
  offer,
};

export const stateWithUpdatedOffer: State = {
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
