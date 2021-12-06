import { combineReducers } from 'redux';
import { appProcess } from './app-process';
import { ReducerName } from '../const';
import { offerData } from './offer-data';
import { userProcess } from './user-process';

const rootReducer = combineReducers({
  [ReducerName.AppProcess]: appProcess,
  [ReducerName.OfferData]: offerData,
  [ReducerName.UserProcess]: userProcess,
});

export default rootReducer;
