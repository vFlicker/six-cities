import type { BrowserHistory } from 'history';
import { PropsWithChildren, useLayoutEffect, useState } from 'react';
import { Router } from 'react-router-dom';

type HistoryRouterProps = PropsWithChildren<{
  history: BrowserHistory;
  basename?: string;
}>;

function HistoryRouter({ basename, children, history }: HistoryRouterProps) {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      basename={basename}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      {children}
    </Router>
  );
}
export { HistoryRouter };
