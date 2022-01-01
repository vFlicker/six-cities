import { createAction } from '@reduxjs/toolkit';
import { TOffer, TOffers } from '../../types/offer';
import ApiError from '../../errors';

export enum ActionType {
  FetchOfferRequested = 'fetchOfferRequested',
  FetchOfferSuccess = 'fetchOfferSuccess',
  FetchOfferFailure = 'fetchOfferFailure',
  FetchOffersNearbyRequested = 'fetchOffersNearbyRequested',
  FetchOffersNearbyLoaded = 'fetchOffersNearbyLoaded',
  FetchOffersNearbyError = 'fetchOffersNearbyError',
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

export const offersNearbyRequested = createAction(ActionType.FetchOffersNearbyRequested);

export const offersNearbyLoaded = createAction(
  ActionType.FetchOffersNearbyLoaded,
  (offers: TOffers) => ({
    payload: offers,
  }),
);

export const offersNearbyError = createAction(
  ActionType.FetchOffersNearbyError,
  (error: ApiError) => ({
    payload: error,
  }),
);
