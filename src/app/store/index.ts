import { configureStore } from '@reduxjs/toolkit';

import { hotelsReducer } from '~/entities/hotel';
import { userReducer } from '~/entities/user';

export const store = configureStore({
  reducer: {
    // favorites: favoritesReducer,
    // hotel: hotelReducer,
    HOTELS: hotelsReducer,
    USER: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
