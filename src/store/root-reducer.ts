import { combineReducers } from 'redux';

import { Reducer } from '~/constants';

import appSlice from './slices/app/slice';
import commentsSlice from './slices/comments/slice';
import offerSlice from './slices/offers/slice';
import userSlice from './slices/user/slice';

export const rootReducer = combineReducers({
  [Reducer.App]: appSlice.reducer,
  [Reducer.Comments]: commentsSlice.reducer,
  [Reducer.Offers]: offerSlice.reducer,
  [Reducer.User]: userSlice.reducer,
});
