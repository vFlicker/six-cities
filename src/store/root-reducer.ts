import { combineReducers } from 'redux';
import { ReducerName } from '../const';
import {
  appSlice,
  offerNearbySlice,
  offersFavoriteSlice,
  offerSlice,
  offersSlice,
  userSlice,
} from './model';

export const rootReducer = combineReducers({
  [ReducerName.App]: appSlice.reducer,
  [ReducerName.Offer]: offerSlice.reducer,
  [ReducerName.Offers]: offersSlice.reducer,
  [ReducerName.OffersFavorite]: offersFavoriteSlice.reducer,
  [ReducerName.OffersNearby]: offerNearbySlice.reducer,
  [ReducerName.User]: userSlice.reducer,
});
