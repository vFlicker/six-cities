import { ApiError } from '@/services';
import { Offer, RootState } from '@/types';

import { ReducerName } from '../../constants';

export const getOffersFavorite = (state: RootState): Offer[] => (
  state[ReducerName.OFFERS_FAVORITE].offersFavorite
);

export const getOffersFavoriteLoadingStatus = (state: RootState): boolean => (
  state[ReducerName.OFFERS_FAVORITE].loading
);

export const getOffersFavoriteError = (state: RootState): ApiError | null => (
  state[ReducerName.OFFERS_FAVORITE].error
);
