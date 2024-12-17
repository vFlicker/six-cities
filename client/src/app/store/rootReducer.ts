import { combineReducers } from 'redux';

import { offerReducer } from '~/entities/offer';
import { StoreSlice } from '~/shared/libs/state';

export const rootReducer = combineReducers({
  [StoreSlice.Offer]: offerReducer,
});
