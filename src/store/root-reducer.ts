import { combineReducers } from 'redux';
import { ReducerName } from '../const';
// import appProcess from './app-process';
import appProcessReducer from './app-process/slice';
import offerData from './offer-data';
import offersData from './offers-data';
import offersFavoriteData from './offers-favorite-data';
import offerNearbyData from './offers-nearby-data';
import userProcess from './user-process';

const rootReducer = combineReducers({
  // [ReducerName.AppProcess]: appProcess,
  [ReducerName.AppProcess]: appProcessReducer,
  [ReducerName.OfferData]: offerData,
  [ReducerName.OffersData]: offersData,
  [ReducerName.OffersFavoriteData]: offersFavoriteData,
  [ReducerName.OffersNearbyData]: offerNearbyData,
  [ReducerName.UserProcess]: userProcess,
});

export default rootReducer;
