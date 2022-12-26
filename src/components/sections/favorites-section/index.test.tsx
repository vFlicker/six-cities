import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';

import { AuthStatus, CityName, Reducer } from '~/constants';
import { makeOffer } from '~/utils';

import { HistoryRouter } from '../../shared';
import { FavoritesSection } from './index';

const mockStore = configureMockStore();

const offer = makeOffer();

const history = createMemoryHistory();

describe('Component: FavoritesSection', () => {
  it('should render correctly', () => {
    const store = mockStore({
      [Reducer.App]: {
        favoriteIdsInProgress: [],
      },
      [Reducer.Offers]: {
        favorites: [offer],
        loading: false,
        error: null,
      },
      [Reducer.User]: {
        authStatus: AuthStatus.Auth,
      },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <FavoritesSection />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(CityName.Amsterdam, 'i')),
    ).toBeInTheDocument();
    expect(screen.getByText(offer.title)).toBeInTheDocument();
  });

  it('should render FavoritesEmptySection', () => {
    const store = mockStore({
      [Reducer.Offers]: {
        favorites: [],
        loading: false,
        error: null,
      },
      [Reducer.User]: {
        authStatus: AuthStatus.Auth,
      },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <FavoritesSection />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/Nothing yet saved/i)).toBeInTheDocument();
  });

  it('should render Loader', () => {
    const store = mockStore({
      [Reducer.Offers]: {
        favorites: [],
        loading: true,
        error: null,
      },
      [Reducer.User]: {
        authStatus: AuthStatus.Auth,
      },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <FavoritesSection />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('should render Error', () => {
    const store = mockStore({
      [Reducer.Offers]: {
        favorites: [],
        loading: false,
        error: true,
      },
      [Reducer.User]: {
        authStatus: AuthStatus.Auth,
      },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <FavoritesSection />
        </HistoryRouter>
      </Provider>,
    );

    expect(
      screen.getByText(/There are problems, please try again later/i),
    ).toBeInTheDocument();
  });
});
