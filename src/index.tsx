import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { AnyAction } from '@reduxjs/toolkit';

import { store, userSlice } from '@/store';
import { App } from '@/components/app';

import 'react-toastify/dist/ReactToastify.css';

store.dispatch(userSlice.checkAuthStatus() as unknown as AnyAction);

ReactDOM.render(
  // TODO: move wrappers to APP
  <StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
