import { configureStore } from '@reduxjs/toolkit';

import { notifier } from './middlewares';
import { rootReducer } from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([notifier]);
  },
});
