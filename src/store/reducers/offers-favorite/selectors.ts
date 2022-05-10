import { ApiError } from '@/services';
import { Offer } from '@/types';

import { ReducerName } from '../constants';
import { RootState } from '../root-reducer';

export const getOffersFavorite = (state: RootState): Offer[] => (
  state[ReducerName.OFFERS_FAVORITE].offersFavorite
);

export const getOffersFavoriteLoadingStatus = (state: RootState): boolean => (
  state[ReducerName.OFFERS_FAVORITE].loading
);

export const getOffersFavoriteError = (state: RootState): ApiError | null => (
  state[ReducerName.OFFERS_FAVORITE].error
);
