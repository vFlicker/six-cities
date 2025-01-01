import { combineReducers } from 'redux';

import { authReducer } from '~/entities/auth';
import { StoreSlice } from '~/shared/libs/state';

export const rootReducer = combineReducers({
  [StoreSlice.Auth]: authReducer,
});
