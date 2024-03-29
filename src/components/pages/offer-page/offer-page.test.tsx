import { Reducer } from '~/constants';
import * as appStore from '~/tests/store/app';
import * as offerStore from '~/tests/store/offer';
import * as offersStore from '~/tests/store/offers';
import * as reviewStore from '~/tests/store/review';
import * as userStore from '~/tests/store/user';
import {
  mockPageId,
  renderWithProviders,
  RenderOptions,
  screen,
} from '~/tests/render';

import { OfferPage } from './offer-page';

describe('Component: OfferPage', () => {
  it('should render correctly', () => {
    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.App]: appStore.initialState,
        [Reducer.Offer]: offerStore.stateWithOffer,
        [Reducer.Offers]: offersStore.stateWithOffers,
        [Reducer.Review]: reviewStore.stateWithReviews,
        [Reducer.User]: userStore.noAuthState,
      },
    };

    renderWithProviders(<OfferPage />, renderOptions);

    expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Other places in the neighborhood/i),
    ).toBeInTheDocument();
    expect(screen.getByAltText(/6 cities logo/i)).toBeInTheDocument();
  });

  it('should dispatch fetchOffer when component loaded', () => {
    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.App]: appStore.initialState,
        [Reducer.Offer]: offerStore.stateWithOffer,
        [Reducer.Offers]: offersStore.stateWithOffers,
        [Reducer.Review]: reviewStore.stateWithReviews,
        [Reducer.User]: userStore.noAuthState,
      },
    };

    const { store } = renderWithProviders(<OfferPage />, renderOptions);

    const [action] = store
      .getActions()
      .filter(({ type }) => type === 'MOCK_FETCH_OFFER_ACTION');

    expect(action).toEqual({
      type: 'MOCK_FETCH_OFFER_ACTION',
      payload: Number(mockPageId),
    });
  });

  it('should render NotFoundSection', () => {
    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.App]: appStore.initialState,
        [Reducer.Offer]: offerStore.initialState,
        [Reducer.Offers]: offersStore.stateWithOffers,
        [Reducer.User]: userStore.authState,
      },
    };

    renderWithProviders(<OfferPage />, renderOptions);

    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
  });

  it('should render Loader', () => {
    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.App]: appStore.initialState,
        [Reducer.Offer]: offerStore.loadingState,
        [Reducer.Offers]: offersStore.stateWithOffers,
        [Reducer.User]: userStore.authState,
      },
    };

    renderWithProviders(<OfferPage />, renderOptions);

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('should render Error', () => {
    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.App]: appStore.initialState,
        [Reducer.Offer]: offerStore.rejectedState,
        [Reducer.Offers]: offersStore.stateWithOffers,
        [Reducer.User]: userStore.authState,
      },
    };

    renderWithProviders(<OfferPage />, renderOptions);

    expect(
      screen.getByText(/There are problems, please try again later/i),
    ).toBeInTheDocument();
  });
});
