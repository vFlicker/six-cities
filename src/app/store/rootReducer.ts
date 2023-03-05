import { combineReducers } from 'redux';

import { hotelsReducer } from '~/entities/hotel';
import { userReducer } from '~/entities/user';

export const rootReducer = combineReducers({
  // favorites: favoritesReducer,
  // hotel: hotelReducer,
  HOTELS: hotelsReducer,
  USER: userReducer,
});
