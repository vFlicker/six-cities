import { combineReducers } from 'redux';

import { ReducerName } from './constants';
import { appSlice } from './reducers/app/app-slice';
import { offerSlice } from './reducers/offer/offer-slice';
import { offersFavoriteSlice } from './reducers/offers-favorite/offers-favorite-slice';
import { offerNearbySlice } from './reducers/offers-nearby/offer-nearby-slice';
import { offersSlice } from './reducers/offers/offers-slice';
import { userSlice } from './reducers/user/user-slice';

export const rootReducer = combineReducers({
  [ReducerName.APP]: appSlice.reducer,
  [ReducerName.OFFER]: offerSlice.reducer,
  [ReducerName.OFFERS]: offersSlice.reducer,
  [ReducerName.OFFERS_FAVORITE]: offersFavoriteSlice.reducer,
  [ReducerName.OFFERS_NEARBY]: offerNearbySlice.reducer,
  [ReducerName.USER]: userSlice.reducer,
});
