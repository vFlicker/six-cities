import { combineReducers } from 'redux';

import { offerReducer } from '~/entities/offer';

export const rootReducer = combineReducers({
  OFFER: offerReducer,
});
