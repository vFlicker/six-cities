import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';

import { AppRoute, AuthStatus, CityName, Reducer } from '~/constants';
import { makeOffer } from '~/utils';

import { HistoryRouter } from '../shared';
import { Pages } from '.';

jest.mock('~/assets/images', () => ({
  pinActiveIconSrc: '~/assets/images/icons/pin-active.svg',
  pinIconSrc: '~/assets/images/icons/pin.svg',
}));

jest.mock('~/store', () => {
  const originalModule = jest.requireActual('~/store');

  return {
    ...originalModule,
    reviewSlice: {
      ...originalModule.reviewSlice,
      fetchReviews: jest.fn(() => ({
        type: 'test',
        payload: [],
      })),
    },
    offerSlice: {
      ...originalModule.offerSlice,
      fetchOffer: jest.fn(() => ({
        type: 'test',
        payload: [],
      })),
    },
    offersSlice: {
      ...originalModule.offersSlice,
      fetchOffersNearby: jest.fn(() => ({
        type: 'test',
        payload: [],
      })),
    },
  };
});

const mockStore = configureMockStore();

const offer = makeOffer({ id: 1, price: 99999 });
const offers = [offer];

const history = createMemoryHistory();

describe('Application Routing', () => {
  it('should render "MainPage" when user navigate to "/"', () => {
    const store = mockStore({
      [Reducer.App]: {
        currentCityName: CityName.Amsterdam,
        favoriteIDsInProgress: [],
      },
      [Reducer.Offers]: {
        all: offers,
        favorites: [],
      },
      [Reducer.User]: {
        authStatus: AuthStatus.Auth,
      },
    });

    const fakeApp = (
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Pages />
        </HistoryRouter>
      </Provider>
    );

    history.push(AppRoute.Root);

    render(fakeApp);

    expect(screen.getByText('Places')).toBeInTheDocument();
    expect(screen.getByText(/places to stay in/i)).toBeInTheDocument();
  });

  it('should render "FavoritesPage" when user navigate to "/favorites"', () => {
    const store = mockStore({
      [Reducer.Offers]: {
        favorites: [],
      },
      [Reducer.User]: {
        authStatus: AuthStatus.Auth,
      },
    });

    const fakeApp = (
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Pages />
        </HistoryRouter>
      </Provider>
    );

    history.push(AppRoute.Favorites);

    render(fakeApp);

    expect(screen.getByText(/Nothing yet saved/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /Save properties to narrow down search or plan your future trips/i,
      ),
    ).toBeInTheDocument();
  });

  it('should render "LoginPage" when user navigate to "/login"', () => {
    const store = mockStore({
      [Reducer.App]: {
        currentCityName: CityName.Amsterdam,
      },
      [Reducer.User]: {
        authStatus: AuthStatus.NoAuth,
      },
    });

    const fakeApp = (
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Pages />
        </HistoryRouter>
      </Provider>
    );

    history.push(AppRoute.Login);

    render(fakeApp);

    expect(screen.getAllByText(/Sign in/i).length).toBe(3);
    expect(screen.getByText(/Amsterdam/i)).toBeInTheDocument();
  });

  it('should render "OfferPage" when user navigate to "/offers/:id"', () => {
    const store = mockStore({
      [Reducer.App]: {
        currentCityName: CityName.Amsterdam,
        favoriteIDsInProgress: [],
      },
      [Reducer.Review]: {
        reviews: [],
      },
      [Reducer.Offer]: {
        offer,
      },
      [Reducer.Offers]: {
        favorites: [],
        nearby: [],
      },
      [Reducer.User]: {
        authStatus: AuthStatus.Auth,
      },
    });

    const fakeApp = (
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Pages />
        </HistoryRouter>
      </Provider>
    );

    history.push(`/offers/${offer.id}`);

    render(fakeApp);

    expect(screen.getByText(new RegExp(offer.title, 'i'))).toBeInTheDocument();
    expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
  });

  it('should render "NotFoundPage" when user navigate to unknown route', () => {
    const store = mockStore({
      [Reducer.User]: {
        authStatus: AuthStatus.NoAuth,
      },
    });

    const fakeApp = (
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Pages />
        </HistoryRouter>
      </Provider>
    );

    history.push('/unknown');

    render(fakeApp);

    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
    expect(
      screen.getByText(/The page you are looking for does not exist/i),
    ).toBeInTheDocument();
  });
});
