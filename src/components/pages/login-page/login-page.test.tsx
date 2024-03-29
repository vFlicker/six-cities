import { createHashHistory } from 'history';
import { Route, Routes } from 'react-router-dom';

import { AppRoute, Reducer } from '~/constants';
import * as appStore from '~/tests/store/app';
import * as offersStore from '~/tests/store/offers';
import * as userStore from '~/tests/store/user';
import { renderWithProviders, RenderOptions, screen } from '~/tests/render';

import { LoginPage } from './login-page';

const history = createHashHistory();

const app = (
  <Routes>
    <Route path={AppRoute.Login} element={<LoginPage />} />
    <Route path={AppRoute.Root} element={<h1>This is main page</h1>} />
  </Routes>
);

beforeEach(() => {
  history.push(AppRoute.Login);
});

describe('Component: LoginPage', () => {
  it('should render correctly', () => {
    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.App]: appStore.initialState,
        [Reducer.Offers]: offersStore.stateWithOffers,
        [Reducer.User]: userStore.noAuthState,
      },
    };

    renderWithProviders(app, renderOptions);

    expect(
      screen.getByRole('button', { name: /Sign in/i }),
    ).toBeInTheDocument();
    expect(screen.getByAltText(/6 cities logo/i)).toBeInTheDocument();
  });

  it('should render "MainPage"', () => {
    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.App]: appStore.initialState,
        [Reducer.Offers]: offersStore.stateWithOffers,
        [Reducer.User]: userStore.authState,
      },
    };

    renderWithProviders(app, renderOptions);

    expect(screen.getByText(/This is main page/i)).toBeInTheDocument();
  });
});
