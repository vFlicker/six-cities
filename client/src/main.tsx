import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

import { App } from './app/App';
import { checkUserAuthentication } from './features/auth';
import { queryClient } from './shared/api';
import { browserHistory } from './shared/libs/router';
import { HistoryRouter } from './shared/ui/HistoryRoute';

checkUserAuthentication();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <App />
        </QueryClientProvider>
      </HistoryRouter>
    </HelmetProvider>
  </React.StrictMode>,
);
