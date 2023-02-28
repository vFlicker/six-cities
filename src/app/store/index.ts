import { configureStore } from '@reduxjs/toolkit';

import { filtersReducer } from '~/entities/filters';
import { hotelsReducer } from '~/entities/hotel';
import { userReducer } from '~/entities/user';

export const store = configureStore({
  reducer: {
    // favorites: favoritesReducer,
    FILTERS: filtersReducer,
    // hotel: hotelReducer,
    HOTELS: hotelsReducer,
    USER: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
