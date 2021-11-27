import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducer } from './store/reducer';
import { offers, reviews } from './mocks';
import createApiService from './services/api-service';
import App from './components/app';

const apiService = createApiService();

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(apiService)),
  ),
);

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
