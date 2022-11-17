import { combineReducers } from 'redux';

import { ReducerName } from './constants';
import appSlice from './reducers/app/slice';
import commentsSlice from './reducers/comments/slice';
import offerSlice from './reducers/offer/slice';
import userSlice from './reducers/user/slice';

export const rootReducer = combineReducers({
  [ReducerName.APP]: appSlice.reducer,
  [ReducerName.COMMENTS]: commentsSlice.reducer,
  [ReducerName.OFFER]: offerSlice.reducer,
  [ReducerName.USER]: userSlice.reducer,
});
