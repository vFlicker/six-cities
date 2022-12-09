import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Global } from '@emotion/react';

import { App } from './components/app';
import { ErrorBoundary } from './components/shared';
import { appSlice, store } from './store';

import { globalStyle } from './styles';

import 'react-toastify/dist/ReactToastify.css';

// TODO: move it to app.jsx?
store.dispatch(appSlice.initializeApp());

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <Global styles={globalStyle} />
        <ToastContainer />
        <App />
      </ErrorBoundary>
    </Provider>
  </StrictMode>,
);
