import { configureStore } from '@reduxjs/toolkit';

import { createApiService } from '@/services';

import { redirect } from './middlewares';
import { rootReducer } from './root-reducer';

const apiService = createApiService();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: apiService,
    },
  }).concat(redirect),
});
