import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { reviews } from '@/mocks';
import { store, userSlice } from '@/store';
import { App } from '@/components/app';

store.dispatch(userSlice.checkAuthStatus());

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App reviews={reviews} />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
