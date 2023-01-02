import { createMemoryHistory } from 'history';

import { AppRoute, Reducer } from '~/constants';
import {
  appStore,
  offersStore,
  offerStore,
  render,
  RenderOptions,
  reviewStore,
  screen,
  userStore,
} from '~/tests';

import { Pages } from './index';

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

const history = createMemoryHistory();

describe('Application Routing', () => {
  it('should render "MainPage" when navigate to "/"', () => {
    const renderOptions: RenderOptions = {
      history,
      preloadedState: {
        [Reducer.App]: appStore.initialState,
        [Reducer.Offers]: offersStore.stateWitUpdatedOffers,
        [Reducer.User]: userStore.authState,
      },
    };

    history.push(AppRoute.Root);

    render(<Pages />, renderOptions);

    expect(screen.getByText('Places')).toBeInTheDocument();
    expect(screen.getByText(/places to stay in/i)).toBeInTheDocument();
  });

  it('should render "FavoritesPage" when navigate to "/favorites"', () => {
    const renderOptions: RenderOptions = {
      history,
      preloadedState: {
        [Reducer.Offers]: offersStore.stateWithOffers,
        [Reducer.User]: userStore.authState,
      },
    };

    history.push(AppRoute.Favorites);

    render(<Pages />, renderOptions);

    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
  });

  it('should render "LoginPage" when navigate to "/login"', () => {
    const renderOptions: RenderOptions = {
      history,
      preloadedState: {
        [Reducer.App]: appStore.initialState,
        [Reducer.User]: userStore.noAuthState,
      },
    };

    history.push(AppRoute.Login);

    render(<Pages />, renderOptions);

    expect(
      screen.getByRole('button', { name: /Sign in/i }),
    ).toBeInTheDocument();
  });

  it('should render "OfferPage" when navigate to "/offers/:id"', () => {
    const { id, title } = offerStore.stateWithOffer.offer;

    const renderOptions: RenderOptions = {
      history,
      preloadedState: {
        [Reducer.App]: appStore.initialState,
        [Reducer.Offer]: offerStore.stateWithOffer,
        [Reducer.Offers]: offersStore.stateWithOffers,
        [Reducer.Review]: reviewStore.stateWithReviews,
        [Reducer.User]: userStore.authState,
      },
    };

    history.push(`/offers/${id}`);

    render(<Pages />, renderOptions);

    expect(screen.getByText(new RegExp(title, 'i'))).toBeInTheDocument();
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
  });

  it('should render "NotFoundPage" when navigate to unknown route', () => {
    const renderOptions: RenderOptions = {
      history,
      preloadedState: {
        [Reducer.User]: userStore.noAuthState,
      },
    };

    history.push('/unknown');

    render(<Pages />, renderOptions);

    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
  });
});
