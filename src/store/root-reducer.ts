import { combineReducers } from 'redux';
import { ReducerName } from '../const';
import appProcess from './app-process';
import offerData from './offer-data';
import offersData from './offers-data';
import userProcess from './user-process';

const rootReducer = combineReducers({
  [ReducerName.AppProcess]: appProcess,
  [ReducerName.OfferData]: offerData,
  [ReducerName.OffersData]: offersData,
  [ReducerName.UserProcess]: userProcess,
});

export default rootReducer;
