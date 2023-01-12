import { renderWithProviders, screen } from '~/tests';

import { ErrorBoundary } from './error-boundary';

describe('Component: ErrorBoundary', () => {
  it('should render without error', () => {
    renderWithProviders(
      <ErrorBoundary>
        <h1>There are no error</h1>
      </ErrorBoundary>,
    );

    expect(screen.getByText(/There are no error/i)).toBeInTheDocument();
  });

  it('should render with error', () => {
    function BrokenComponent(): JSX.Element {
      const error = true;
      if (error) throw new Error();
      return <h1>There are no error</h1>;
    }

    renderWithProviders(
      <ErrorBoundary>
        <BrokenComponent />
      </ErrorBoundary>,
    );

    expect(
      screen.getByText(/There are problems, please try again later/i),
    ).toBeInTheDocument();
  });
});
