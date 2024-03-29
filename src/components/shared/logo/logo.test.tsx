import { Route, Routes } from 'react-router-dom';
import { createHashHistory } from 'history';

import { AppRoute } from '~/constants';
import { renderWithProviders, screen, userEvent } from '~/tests/render';

import { Logo } from './logo';

const history = createHashHistory();

describe('Component: Logo', () => {
  it('should render link when user are not on root url', () => {
    history.push('/fake');

    renderWithProviders(<Logo />);

    expect(screen.getByAltText(/6 cities logo/i)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('should not render link when user are on root url', () => {
    history.push(AppRoute.Root);

    renderWithProviders(<Logo />);

    expect(screen.getByAltText(/6 cities logo/i)).toBeInTheDocument();
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  it('should redirect to root url when user clicked to link', async () => {
    history.push('/fake');

    renderWithProviders(
      <Routes>
        <Route path="/" element={<h1>This is main page</h1>} />
        <Route path="*" element={<Logo />} />
      </Routes>,
    );

    expect(screen.queryByText(/This is main page/i)).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole('link'));

    expect(screen.queryByText(/This is main page/i)).toBeInTheDocument();
  });
});
