import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';

import { AppRoute, AuthStatus, CityName, Reducer } from '~/constants';
// import { makeComment, makeOffer } from '~/utils';

import { HistoryRouter } from '../shared';
import { Pages } from '.';

const mockStore = configureMockStore();

// const offer = makeOffer({ id: 1, price: 99999 });
// const comment = makeComment();

const history = createMemoryHistory();

describe('Application Routing', () => {
  // it('should render "MainPage" when user navigate to "/"', () => {
  //   // TODO:
  // const store = mockStore({
  //   [Reducer.App]: {
  //     currentCityName: CityName.Amsterdam,
  //     favoriteIDsInProgress: [],
  //   },
  //   [Reducer.Comments]: {
  //     comments: [comment],
  //   },
  //   [Reducer.Offer]: {
  //     offer,
  //   },
  //   [Reducer.Offers]: {
  //     favorites: [offer],
  //     nearby: [offer],
  //   },
  //   [Reducer.User]: {
  //     authStatus: AuthStatus.Auth,
  //   },
  // });

  // const fakeApp = (
  //   <Provider store={store}>
  //     <HistoryRouter history={history}>
  //       <Pages />
  //     </HistoryRouter>
  //   </Provider>
  // );

  //   history.push(AppRoute.Root);

  //   render(fakeApp);

  //   expect(screen.getAllByText('Sign in').length).toBe(3);
  //   expect(screen.getByText('Amsterdam')).toBeInTheDocument();
  // });

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

    expect(screen.getByText('Nothing yet saved')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Save properties to narrow down search or plan your future trips.',
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

    expect(screen.getAllByText('Sign in').length).toBe(3);
    expect(screen.getByText('Amsterdam')).toBeInTheDocument();
  });

  // it('should render "OfferPage" when user navigate to "/offers/:id"', () => {
  //   // TODO:

  // const store = mockStore({
  //   [Reducer.App]: {
  //     currentCityName: CityName.Amsterdam,
  //     favoriteIDsInProgress: [],
  //   },
  //   [Reducer.Comments]: {
  //     comments: [comment],
  //   },
  //   [Reducer.Offer]: {
  //     offer,
  //   },
  //   [Reducer.Offers]: {
  //     favorites: [offer],
  //     nearby: [offer],
  //   },
  //   [Reducer.User]: {
  //     authStatus: AuthStatus.Auth,
  //   },
  // });

  // const fakeApp = (
  //   <Provider store={store}>
  //     <HistoryRouter history={history}>
  //       <Pages />
  //     </HistoryRouter>
  //   </Provider>
  // );

  //   const id = 1;
  //   history.push(`/offers/${id}`);

  //   render(fakeApp);

  //   expect(screen.getByText('9999')).toBeInTheDocument();
  //   expect(screen.getByText("What's inside")).toBeInTheDocument();
  //   expect(screen.getByText('Reviews')).toBeInTheDocument();
  // });

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

    expect(screen.getByText('Page not found')).toBeInTheDocument();
    expect(
      screen.getByText('The page you are looking for does not exist'),
    ).toBeInTheDocument();
  });
});
