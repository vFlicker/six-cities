import { combineReducers } from 'redux';

import { ReducerName } from '../../const';

import { appSlice } from './app/app-slice';
import { offerSlice } from './offer/offer-slice';
import { offersFavoriteSlice } from './offers-favorite/offers-favorite-slice';
import { offerNearbySlice } from './offers-nearby/offer-nearby-slice';
import { offersSlice } from './offers/offers-slice';
import { userSlice } from './user/user-slice';

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  [ReducerName.App]: appSlice.reducer,
  [ReducerName.Offer]: offerSlice.reducer,
  [ReducerName.Offers]: offersSlice.reducer,
  [ReducerName.OffersFavorite]: offersFavoriteSlice.reducer,
  [ReducerName.OffersNearby]: offerNearbySlice.reducer,
  [ReducerName.User]: userSlice.reducer,
});
