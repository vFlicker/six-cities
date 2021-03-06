import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { reviews } from '@/mocks';
import { store, userSlice } from '@/store';
import { App } from '@/components/app';

import 'react-toastify/dist/ReactToastify.css';

store.dispatch(userSlice.checkAuthStatus());

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App reviews={reviews} />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
