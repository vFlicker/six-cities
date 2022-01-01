import { createAction } from '@reduxjs/toolkit';
import { TOffers } from '../../types/offer';
import ApiError from '../../errors';

export enum ActionType {
  FetchOffersNearbyRequested = 'fetchOffersNearbyRequested',
  FetchOffersNearbyLoaded = 'fetchOffersNearbyLoaded',
  FetchOffersNearbyError = 'fetchOffersNearbyError',
}

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