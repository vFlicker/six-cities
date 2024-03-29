import { createHashHistory } from 'history';
import { Route, Routes } from 'react-router-dom';

import { AppRoute, Reducer } from '~/constants';
import * as appStore from '~/tests/store/app';
import * as offersStore from '~/tests/store/offers';
import * as userStore from '~/tests/store/user';
import {
  renderWithProviders,
  RenderOptions,
  screen,
  userEvent,
} from '~/tests/render';

import { MainPage } from './main-page';

const history = createHashHistory();

beforeEach(() => {
  history.push(AppRoute.Root);
});

describe('Component: MainSection', () => {
  it('should render correctly', () => {
    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.App]: appStore.initialState,
        [Reducer.Offers]: offersStore.stateWithOffers,
        [Reducer.User]: userStore.authState,
      },
    };

    renderWithProviders(<MainPage />, renderOptions);

    const filters = screen.getAllByTestId('location');

    expect(filters).toHaveLength(filters.length);
    expect(screen.getByText(/places to stay in/i)).toBeInTheDocument();
    expect(screen.getByAltText(/6 cities logo/i)).toBeInTheDocument();
  });

  it('should render "FavoritesPage"', async () => {
    const { email } = userStore.authState.user;

    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.App]: appStore.initialState,
        [Reducer.Offers]: offersStore.stateWithOffers,
        [Reducer.User]: userStore.authState,
      },
    };

    const app = (
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage />} />
        <Route
          path={AppRoute.Favorites}
          element={<h1>This is favorites page</h1>}
        />
      </Routes>
    );

    renderWithProviders(app, renderOptions);

    expect(screen.getByText(/places to stay in/i)).toBeInTheDocument();

    await userEvent.click(
      screen.getByRole('link', { name: new RegExp(email, 'i') }),
    );

    expect(screen.getByText(/This is favorites page/i)).toBeInTheDocument();
  });

  it('should render "LoginPage"', async () => {
    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.App]: appStore.initialState,
        [Reducer.Offers]: offersStore.stateWithOffers,
        [Reducer.User]: userStore.noAuthState,
      },
    };

    const app = (
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage />} />
        <Route path={AppRoute.Login} element={<h1>This is login page</h1>} />
      </Routes>
    );

    renderWithProviders(app, renderOptions);

    expect(screen.getByText(/places to stay in/i)).toBeInTheDocument();

    await userEvent.click(screen.getByRole('link', { name: /Sign in/i }));

    expect(screen.getByText(/This is login page/i)).toBeInTheDocument();
  });
});
