import { createAction } from '@reduxjs/toolkit';
import ApiError from '../../errors';
import { TOffers } from '../../types/offer';

export enum ActionType {
  FetchOffersFavoriteRequest = 'offerFavoriteData/fetchOffersFavoriteRequest',
  FetchOffersFavoriteSuccess = 'offerFavoriteData/fetchOffersFavoriteSuccess',
  FetchOffersFavoriteFailure = 'offerFavoriteData/fetchOffersFavoriteFailure',
}

export const offersFavoriteRequested = createAction(ActionType.FetchOffersFavoriteRequest);

export const offersFavoriteLoaded = createAction(
  ActionType.FetchOffersFavoriteSuccess,
  (offersFavorite: TOffers) => ({
    payload: offersFavorite,
  }),
);

export const offersFavoriteError = createAction(
  ActionType.FetchOffersFavoriteFailure,
  (error: ApiError) => ({
    payload: error,
  }),
);
