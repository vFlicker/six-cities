import { configureStore } from '@reduxjs/toolkit';

import { redirect } from './middleware';
import { rootReducer } from './root-reducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([redirect]);
  },
});
