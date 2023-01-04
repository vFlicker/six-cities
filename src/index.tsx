import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Global } from '@emotion/react';

import { browserHistory } from './browser-history';
import { App } from './components/app';
import { ErrorBoundary, HistoryRouter } from './components/shared';
import { store } from './store';
import { globalStyle } from './styles';

import 'react-toastify/dist/ReactToastify.css';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <ErrorBoundary>
          <Global styles={globalStyle} />
          <ToastContainer />
          <App />
        </ErrorBoundary>
      </HistoryRouter>
    </Provider>
  </StrictMode>,
);
