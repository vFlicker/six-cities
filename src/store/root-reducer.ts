import { combineReducers } from 'redux';

import { Reducer } from '~/constants';

import appReducer from './slices/app/slice';
import reviewReducer from './slices/review/slice';
import offerReducer from './slices/offer/slice';
import offersReducer from './slices/offers/slice';
import userReducer from './slices/user/slice';

export const rootReducer = combineReducers({
  [Reducer.App]: appReducer,
  [Reducer.Review]: reviewReducer,
  [Reducer.Offer]: offerReducer,
  [Reducer.Offers]: offersReducer,
  [Reducer.User]: userReducer,
});
