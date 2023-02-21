import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Component } from './types';

export const withRouter = (component: Component): Component => {
  function WithRouter(): JSX.Element {
    return (
      <Router>
        <Suspense
          fallback={
            // TODO: add spinner
            <p>loading</p>
          }
        >
          {component()}
        </Suspense>
      </Router>
    );
  }

  return WithRouter;
};
