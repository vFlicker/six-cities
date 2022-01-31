import { configureStore } from '@reduxjs/toolkit';

import { AppRoute, AuthorizationStatus } from '../const';
import { createApiService } from '../services';
import { redirect } from './middlewares';
import { redirectToRoute } from './model/user/action';
import { setAuthorizationStatus } from './model/user/user-slice';
import { rootReducer } from './root-reducer';

const onUnauthorizedHandler = () => {
  store.dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  store.dispatch(redirectToRoute(AppRoute.Login));
};

const apiService = createApiService(onUnauthorizedHandler);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: apiService,
    },
  }).concat(redirect),
});

export type AppDispatch = typeof store.dispatch;
