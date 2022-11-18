import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Global } from '@emotion/react';

import { App } from './components/app';
import { ErrorBoundary } from './components/shared';
import { store, userSlice } from './store';

import { globalStyle } from './styles';

import 'react-toastify/dist/ReactToastify.css';

store.dispatch(userSlice.checkAuthStatus());

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <Global styles={globalStyle} />
        <ToastContainer />
        <App />
      </ErrorBoundary>
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
