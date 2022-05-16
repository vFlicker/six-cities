import { configureStore } from '@reduxjs/toolkit';

import { createApiService } from '@/services';

import { normalizePayload, redirect } from './middlewares';
import { rootReducer } from './root-reducer';

const apiService = createApiService();

const middlewareConfiguration = {
  thunk: {
    extraArgument: apiService,
  },
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(middlewareConfiguration)
    .concat([redirect, normalizePayload]),
});
