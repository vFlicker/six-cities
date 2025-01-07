import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';

import { App } from './app/App';
import { store } from './app/store';
import { checkAuth } from './features/checkAuth';
import { queryClient } from './shared/api';
import { browserHistory } from './shared/libs/router';
import { HistoryRouter } from './shared/ui/HistoryRoute';

checkAuth(store);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Provider store={store}>
            <App />
          </Provider>
        </QueryClientProvider>
      </HistoryRouter>
    </HelmetProvider>
  </React.StrictMode>,
);
