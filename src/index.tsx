import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { AppRoute, AuthorizationStatus } from './const';
import createApiService from './services/api-service';
import { checkAuthStatus } from './store/api-actions';
import redirect from './store/middlewares';
import rootReducer from './store/root-reducer';
import { redirectToRoute, setAuthorizationStatus } from './store/user-process/action';
import { reviews } from './mocks';

import App from './components/app';

const onUnauthorizedHandler = () => {
  store.dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  store.dispatch(redirectToRoute(AppRoute.Login));
};

const apiService = createApiService(onUnauthorizedHandler);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: apiService,
    },
  }).concat(redirect),
});

store.dispatch(checkAuthStatus());
store.dispatch(checkAuthStatus());

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App
        reviews={reviews}
      />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
