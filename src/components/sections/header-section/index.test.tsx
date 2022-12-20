import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { AuthStatus, Reducer } from '~/constants';
import { makeUser } from '~/utils';

import { HistoryRouter } from '../../shared';
import { HeaderSection } from './index';

const mockStore = configureMockStore();

const history = createMemoryHistory();

const user = makeUser();

describe('Component: HeaderSection', () => {
  it('should render NoAuthList when user is unauthorized', () => {
    const store = mockStore({
      [Reducer.User]: {
        authStatus: AuthStatus.NoAuth,
      },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HeaderSection />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.queryByText(/Sign in/i)).toBeInTheDocument();
  });

  it('should render AuthList when user is authorized', () => {
    const store = mockStore({
      [Reducer.User]: {
        authStatus: AuthStatus.Auth,
        user,
      },
      [Reducer.Offers]: {
        favorites: [],
      },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HeaderSection />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
  });
});
