import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import createApiService from './services/api-service';
import { checkAuthStatus } from './store/api-actions';
import rootReducer from './store/root-reducer';
import { offers, reviews } from './mocks';

import App from './components/app';

const apiService = createApiService();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: apiService,
    },
  }),
});

store.dispatch(checkAuthStatus());

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App
        offers={offers}
        reviews={reviews}
      />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
