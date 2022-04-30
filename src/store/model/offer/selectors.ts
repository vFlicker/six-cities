import { ReducerName } from '../../../const';
import ApiError from '../../../errors';
import { TOffer } from '../../../types/offer';
import { RootState } from '../root-reducer';

export const getOffer = (state: RootState): TOffer | null => (
  state[ReducerName.Offer].offer
);

export const getOfferLoadingStatus = (state: RootState): boolean => (
  state[ReducerName.Offer].loading
);

export const getOfferError = (state: RootState): ApiError | null => (
  state[ReducerName.Offer].error
);
