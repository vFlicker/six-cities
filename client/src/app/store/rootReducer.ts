import { combineReducers } from 'redux';

import { authReducer } from '~/entities/auth';
import { offerReducer } from '~/entities/offer';
import { StoreSlice } from '~/shared/libs/state';

export const rootReducer = combineReducers({
  [StoreSlice.Auth]: authReducer,
  [StoreSlice.Offer]: offerReducer,
});
