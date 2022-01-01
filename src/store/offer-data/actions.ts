import { createAction } from '@reduxjs/toolkit';
import { TOffer } from '../../types/offer';
import ApiError from '../../errors';

export enum ActionType {
  FetchOfferRequested = 'fetchOfferRequested',
  FetchOfferSuccess = 'fetchOfferSuccess',
  FetchOfferFailure = 'fetchOfferFailure',
}

export const offerRequested = createAction(ActionType.FetchOfferRequested);

export const offerLoaded = createAction(
  ActionType.FetchOfferSuccess,
  (offer: TOffer) => ({
    payload: offer,
  }),
);

export const offerError = createAction(
  ActionType.FetchOfferFailure,
  (error: ApiError) => ({
    payload: error,
  }),
);
