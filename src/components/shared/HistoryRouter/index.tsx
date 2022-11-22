import { useState, useLayoutEffect, ReactNode } from 'react';
import { Router } from 'react-router-dom';
import { BrowserHistory } from 'history';

type HistoryRouterProps = {
  history: BrowserHistory;
  basename?: string;
  children?: ReactNode;
};

export function HistoryRouter({
  basename,
  children,
  history,
}: HistoryRouterProps): JSX.Element {
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
