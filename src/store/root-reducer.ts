import { combineReducers } from 'redux';
import { appProcess } from './app-process';
import { offerData } from './offer-data';
import { userProcess } from './user-process';

export enum NameSpace {
  APP_PROCESS = 'APP_PROCESS',
  OFFER_DATA = 'OFFER_DATA',
  USER_PROCESS = 'USER_PROCESS',
}

export default combineReducers({
  [NameSpace.APP_PROCESS]: appProcess,
  [NameSpace.OFFER_DATA]: offerData,
  [NameSpace.USER_PROCESS]: userProcess,
});
