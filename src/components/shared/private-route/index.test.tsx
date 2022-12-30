import { Route, Routes } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { AppRoute, Reducer } from '~/constants';
import { render, RenderOptions, screen, userStore } from '~/tests';

import { PrivateRoute } from './index';

const history = createMemoryHistory();

describe('Component: PrivateRoute', () => {
  beforeEach(() => {
    history.push('/private');
  });

  it('should render login page when user not authorized,', () => {
    const renderOption: RenderOptions = {
      history,
      preloadedState: {
        [Reducer.User]: userStore.noAuthState,
      },
    };

    render(
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
      history,
      preloadedState: {
        [Reducer.User]: userStore.authState,
      },
    };

    render(
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
