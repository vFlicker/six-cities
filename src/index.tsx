import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { reviews } from '@/mocks';
import { checkAuthStatus, store } from '@/redux';
import { App } from '@/components/app';

store.dispatch(checkAuthStatus());

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App reviews={reviews} />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
