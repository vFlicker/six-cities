import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { reducer } from './store/reducer';
import { offers, reviews } from './mocks';
import ApiService from './services/api-service';
import { BACKEND_URL } from './const';
import App from './components/app';
import { ApiServiceProvider } from './components/api-service-context';

const store = createStore(
  reducer,
  composeWithDevTools(),
);

const apiService = new ApiService(BACKEND_URL);

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <ApiServiceProvider value={apiService}>
        <App
          offers={offers}
          reviews={reviews}
        />
      </ApiServiceProvider>
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
