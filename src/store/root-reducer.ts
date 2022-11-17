import { combineReducers } from 'redux';

import { Reducer } from '~/constants';

import appSlice from './reducers/app/slice';
import commentsSlice from './reducers/comments/slice';
import offerSlice from './reducers/offer/slice';
import userSlice from './reducers/user/slice';

export const rootReducer = combineReducers({
  [Reducer.App]: appSlice.reducer,
  [Reducer.Comments]: commentsSlice.reducer,
  [Reducer.Offer]: offerSlice.reducer,
  [Reducer.User]: userSlice.reducer,
});
