import { Route, Routes } from 'react-router-dom';
import { createHashHistory } from 'history';

import { AppRoute, Reducer } from '~/constants';
import { authState, noAuthState } from '~/tests/store/user';
import { renderWithProviders, RenderOptions, screen } from '~/tests/render';

import { PrivateRoute } from './private-route';

const history = createHashHistory();

beforeEach(() => {
  history.push('/private');
});

describe('Component: PrivateRoute', () => {
  it('should render login page when user not authorized,', () => {
    const renderOption: RenderOptions = {
      preloadedState: {
        [Reducer.User]: noAuthState,
      },
    };

    renderWithProviders(
      <Routes>
        <Route path={AppRoute.Login} element={<h1>Login page</h1>} />
        <Route
          path="/private"
          element={
            <PrivateRoute>
              <h1>Private page</h1>
            </PrivateRoute>
          }
        />
      </Routes>,
      renderOption,
    );

    expect(screen.getByText(/Login page/i)).toBeInTheDocument();
    expect(screen.queryByText(/Private page/i)).not.toBeInTheDocument();
  });

  it('should render secret page when user authorized,', () => {
    const renderOption: RenderOptions = {
      preloadedState: {
        [Reducer.User]: authState,
      },
    };

    renderWithProviders(
      <Routes>
        <Route path={AppRoute.Login} element={<h1>Login route</h1>} />
        <Route
          path="/private"
          element={
            <PrivateRoute>
              <h1>Private route</h1>
            </PrivateRoute>
          }
        />
      </Routes>,
      renderOption,
    );

    expect(screen.getByText(/Private route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Login route/i)).not.toBeInTheDocument();
  });
});
