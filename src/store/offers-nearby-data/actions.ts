import { createAction } from '@reduxjs/toolkit';
import { TOffers } from '../../types/offer';
import ApiError from '../../errors';

export enum ActionType {
  FetchOffersNearbyRequest = 'offerNearbyData/fetchOffersNearbyRequest',
  FetchOffersNearbySuccess = 'offerNearbyData/fetchOffersNearbySuccess',
  FetchOffersNearbyFailure = 'offerNearbyData/fetchOffersNearbyFailure',
}

export const offersNearbyRequested = createAction(ActionType.FetchOffersNearbyRequest);

export const offersNearbyLoaded = createAction(
  ActionType.FetchOffersNearbySuccess,
  (offersNearby: TOffers) => ({
    payload: offersNearby,
  }),
);

export const offersNearbyError = createAction(
  ActionType.FetchOffersNearbyFailure,
  (error: ApiError) => ({
    payload: error,
  }),
);
