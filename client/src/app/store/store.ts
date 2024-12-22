import { configureStore } from '@reduxjs/toolkit';

import { redirectMiddleware } from '~/entities/auth';

import { rootReducer } from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(redirectMiddleware);
  },
});
