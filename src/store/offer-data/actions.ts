import { createAction } from '@reduxjs/toolkit';
import { TOffer } from '../../types/offer';
import ApiError from '../../errors';

export enum ActionType {
  FetchOfferRequest = 'offerData/fetchOfferRequest',
  FetchOfferSuccess = 'offerData/fetchOfferSuccess',
  FetchOfferFailure = 'offerData/fetchOfferFailure',
}

export const offerRequested = createAction(ActionType.FetchOfferRequest);

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
