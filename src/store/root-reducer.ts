import { combineReducers } from 'redux';
import { appProcess } from './app-process';
import { ReducerName } from '../const';
import { offerData } from './offer-data';
import { userProcess } from './user-process';

export default combineReducers({
  [ReducerName.APP_PROCESS]: appProcess,
  [ReducerName.OFFER_DATA]: offerData,
  [ReducerName.USER_PROCESS]: userProcess,
});
