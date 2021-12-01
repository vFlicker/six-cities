import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

import createApiService from './services/api-service';
import { checkAuthStatus } from './store/api-actions';
import rootReducer from './store/root-reducer';
import { offers, reviews } from './mocks';

import App from './components/app';

const apiService = createApiService();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(apiService)),
  ),
);

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
