import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import '@testing-library/jest-dom';

import { AppRoute, AuthStatus, Reducer } from '~/constants';

import { HistoryRouter } from '../history-router';
import { PrivateRoute } from './index';

const mockStore = configureMockStore();

const history = createMemoryHistory();

describe('Component: PrivateRoute', () => {
  beforeEach(() => {
    history.push('/private');
  });

  it('should render login page when user not authorized,', () => {
    const store = mockStore({
      [Reducer.User]: {
        authStatus: AuthStatus.NoAuth,
      },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
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
          </Routes>
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/Login page/i)).toBeInTheDocument();
    expect(screen.queryByText(/Private page/i)).not.toBeInTheDocument();
  });

  it('should render secret page when user authorized,', () => {
    const store = mockStore({
      [Reducer.User]: {
        authStatus: AuthStatus.Auth,
      },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
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
          </Routes>
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/Private route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Login route/i)).not.toBeInTheDocument();
  });
});
