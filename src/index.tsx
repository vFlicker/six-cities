import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { reviews } from './mocks';
import { store } from './store';
import { checkAuthStatus } from './store/model/user/action';

import App from './components/app';

store.dispatch(checkAuthStatus());

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App reviews={reviews} />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
