import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { HistoryRouter } from '../../../../shared';
import { NoAuthList } from './index';

const history = createMemoryHistory();

describe('Component: NoAuthList', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <NoAuthList />
      </HistoryRouter>,
    );

    expect(screen.queryByText(/Sign out/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
