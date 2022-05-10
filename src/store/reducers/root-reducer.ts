import { combineReducers } from 'redux';

import { ReducerName } from './constants';
import { appSlice } from './app/app-slice';
import { offerSlice } from './offer/offer-slice';
import { offersFavoriteSlice } from './offers-favorite/offers-favorite-slice';
import { offerNearbySlice } from './offers-nearby/offer-nearby-slice';
import { offersSlice } from './offers/offers-slice';
import { userSlice } from './user/user-slice';

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  [ReducerName.APP]: appSlice.reducer,
  [ReducerName.OFFER]: offerSlice.reducer,
  [ReducerName.OFFERS]: offersSlice.reducer,
  [ReducerName.OFFERS_FAVORITE]: offersFavoriteSlice.reducer,
  [ReducerName.OFFERS_NEARBY]: offerNearbySlice.reducer,
  [ReducerName.USER]: userSlice.reducer,
});
