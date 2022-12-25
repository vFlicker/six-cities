import { combineReducers } from 'redux';

import { Reducer } from '~/constants';

import appSlice from './slices/app/slice';
import reviewSlice from './slices/review/slice';
import offerSlice from './slices/offer/slice';
import offersSlice from './slices/offers/slice';
import userSlice from './slices/user/slice';

export const rootReducer = combineReducers({
  [Reducer.App]: appSlice.reducer,
  [Reducer.Review]: reviewSlice.reducer,
  [Reducer.Offer]: offerSlice.reducer,
  [Reducer.Offers]: offersSlice.reducer,
  [Reducer.User]: userSlice.reducer,
});
