import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { store, userSlice } from './store';
import { App } from './components/app';
import { ErrorBoundary } from './components/shared';

import 'react-toastify/dist/ReactToastify.css';

store.dispatch(userSlice.checkAuthStatus());

ReactDOM.render(
  // TODO: move wrappers to APP
  <StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <ToastContainer />
        <App />
      </ErrorBoundary>
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
