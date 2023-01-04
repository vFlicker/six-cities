import { configureStore } from '@reduxjs/toolkit';

import { loginNotification, redirect } from './middlewares';
import { rootReducer } from './root-reducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([loginNotification, redirect]);
  },
});
