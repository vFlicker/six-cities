import { configureStore } from '@reduxjs/toolkit';

import hotelsReducer from '~/entities/hotels/model';
import userReducer from '~/entities/user/model';

export const store = configureStore({
  reducer: {
    HOTELS: hotelsReducer,
    USER: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
