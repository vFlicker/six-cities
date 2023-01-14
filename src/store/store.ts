import { configureStore } from '@reduxjs/toolkit';

import { loginNotification } from './middlewares/login-notification';
import { redirect } from './middlewares/redirect';
import { rootReducer } from './root-reducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([loginNotification, redirect]);
  },
});
