import { configureStore } from '@reduxjs/toolkit';

import { userReducer } from '~/entities/user/model';

export const store = configureStore({
  reducer: {
    USER: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
