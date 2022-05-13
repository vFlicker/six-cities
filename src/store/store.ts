import { configureStore } from '@reduxjs/toolkit';

import { AppRoute, AuthorizationStatus } from '@/constants';
import { createApiService } from '@/services';

import { redirect } from './middlewares';
import { redirectToRoute } from './reducers/user/action';
import { setAuthorizationStatus } from './reducers/user/user-slice';
import { rootReducer } from './root-reducer';

const onUnauthorizedHandler = () => {
  store.dispatch(setAuthorizationStatus(AuthorizationStatus.NO_AUTH));
  store.dispatch(redirectToRoute(AppRoute.LOGIN));
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
