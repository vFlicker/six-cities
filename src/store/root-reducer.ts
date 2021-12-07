import { combineReducers } from 'redux';
import { ReducerName } from '../const';
import appProcess from './app-process';
import offerData from './offers-data';
import userProcess from './user-process';

const rootReducer = combineReducers({
  [ReducerName.AppProcess]: appProcess,
  [ReducerName.OffersData]: offerData,
  [ReducerName.UserProcess]: userProcess,
});

export default rootReducer;
