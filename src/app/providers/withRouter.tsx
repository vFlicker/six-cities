import { ComponentType, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

export const withRouter = (Component: ComponentType): ComponentType => {
  function WithRouter(): JSX.Element {
    return (
      <Router>
        <Suspense
          fallback={
            // TODO: add spinner
            <p>loading</p>
          }
        >
          <Component />
        </Suspense>
      </Router>
    );
  }

  return WithRouter;
};
