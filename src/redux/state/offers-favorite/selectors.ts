import { ReducerName } from '@/constants';
import { ApiError } from '@/services';
import { Offer } from '@/types';

import { RootState } from '../root-reducer';

export const getOffersFavorite = (state: RootState): Offer[] => (
  state[ReducerName.OffersFavorite].offersFavorite
);

export const getOffersFavoriteLoadingStatus = (state: RootState): boolean => (
  state[ReducerName.OffersFavorite].loading
);

export const getOffersFavoriteError = (state: RootState): ApiError | null => (
  state[ReducerName.OffersFavorite].error
);
