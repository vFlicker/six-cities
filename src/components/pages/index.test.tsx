import { createHashHistory } from 'history';

import { AppRoute, Reducer } from '~/constants';
import {
  appStore,
  offersStore,
  offerStore,
  renderWithProviders,
  RenderOptions,
  reviewStore,
  screen,
  userStore,
} from '~/tests';

import { Pages } from './index';

const history = createHashHistory();

describe('Application Routing', () => {
  it('should render "MainPage" when navigate to "/"', () => {
    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.App]: appStore.initialState,
        [Reducer.Offers]: offersStore.stateWitUpdatedOffers,
        [Reducer.User]: userStore.authState,
      },
    };

    history.push(AppRoute.Root);

    renderWithProviders(<Pages />, renderOptions);

    expect(screen.getByText('Places')).toBeInTheDocument();
    expect(screen.getByText(/places to stay in/i)).toBeInTheDocument();
  });

  it('should render "FavoritesPage" when navigate to "/favorites"', () => {
    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.App]: appStore.initialState,
        [Reducer.Offers]: offersStore.stateWithOffers,
        [Reducer.User]: userStore.authState,
      },
    };

    history.push(AppRoute.Favorites);

    renderWithProviders(<Pages />, renderOptions);

    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
  });

  it('should render "LoginPage" when navigate to "/login"', () => {
    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.App]: appStore.initialState,
        [Reducer.User]: userStore.noAuthState,
      },
    };

    history.push(AppRoute.Login);

    renderWithProviders(<Pages />, renderOptions);

    expect(
      screen.getByRole('button', { name: /Sign in/i }),
    ).toBeInTheDocument();
  });

  it('should render "OfferPage" when navigate to "/offers/:id"', () => {
    const { id, title } = offerStore.stateWithOffer.offer;

    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.App]: appStore.initialState,
        [Reducer.Offer]: offerStore.stateWithOffer,
        [Reducer.Offers]: offersStore.stateWithOffers,
        [Reducer.Review]: reviewStore.stateWithReviews,
        [Reducer.User]: userStore.authState,
      },
    };

    history.push(`/offers/${id}`);

    renderWithProviders(<Pages />, renderOptions);

    expect(screen.getByText(new RegExp(title, 'i'))).toBeInTheDocument();
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
  });

  it('should render "NotFoundPage" when navigate to unknown route', () => {
    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.User]: userStore.noAuthState,
      },
    };

    history.push('/unknown');

    renderWithProviders(<Pages />, renderOptions);

    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
  });
});
