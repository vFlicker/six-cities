import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './root-reducer';
import redirect from './middlewares';
import { redirectToRoute, setAuthorizationStatus } from './user-process/action';
import { AppRoute, AuthorizationStatus } from '../const';
import createApiService from '../services/api-service';

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
