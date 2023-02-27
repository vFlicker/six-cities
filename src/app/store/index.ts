import { configureStore } from '@reduxjs/toolkit';

import { hotelsReducer } from '~/entities/hotels';
import { userReducer } from '~/entities/user';

export const store = configureStore({
  reducer: {
    HOTELS: hotelsReducer,
    USER: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
