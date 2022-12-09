import { Route, Routes } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { AppRoute } from '~/constants';

import { HistoryRouter } from '../history-router';
import { Logo } from './index';

const history = createMemoryHistory();

describe('Component: Logo', () => {
  it("should render link when user are't on root url", () => {
    history.push('/fake');

    render(
      <HistoryRouter history={history}>
        <Logo width={64} height={33} />
      </HistoryRouter>,
    );

    expect(screen.getByAltText('6 cities logo')).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it("should't render link when user are on root url", () => {
    history.push(AppRoute.Root);

    render(
      <HistoryRouter history={history}>
        <Logo width={64} height={33} />
      </HistoryRouter>,
    );

    expect(screen.getByAltText('6 cities logo')).toBeInTheDocument();
    expect(screen.queryByText('link')).not.toBeInTheDocument();
  });

  it('should redirect to root url when user clicked to link', async () => {
    history.push('/fake');

    render(
      <HistoryRouter history={history}>
        <Routes>
          <Route path="/" element={<h1>This is main page</h1>} />
          <Route path="*" element={<Logo width={64} height={33} />} />
        </Routes>
      </HistoryRouter>,
    );

    expect(screen.queryByText('This is main page')).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole('link'));

    expect(screen.queryByText('This is main page')).toBeInTheDocument();
  });
});
