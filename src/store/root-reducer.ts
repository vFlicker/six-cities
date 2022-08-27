import { combineReducers } from 'redux';

import { ReducerName } from './constants';
import appSlice from './reducers/app/slice';
import offerSlice from './reducers/offer/slice';
import offersFavoriteSlice from './reducers/offers-favorite/slice';
import offerNearbySlice from './reducers/offers-nearby/slice';
import userSlice from './reducers/user/slice';

export const rootReducer = combineReducers({
  [ReducerName.APP]: appSlice.reducer,
  [ReducerName.OFFER]: offerSlice.reducer,
  [ReducerName.OFFERS_FAVORITE]: offersFavoriteSlice.reducer,
  [ReducerName.OFFERS_NEARBY]: offerNearbySlice.reducer,
  [ReducerName.USER]: userSlice.reducer,
});
