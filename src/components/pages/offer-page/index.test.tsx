import { Reducer } from '~/constants';
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
import { ToggleFavoritePayload } from '~/types';

import { OfferPage } from './index';

const PAGE_ID = '10';

jest.mock('~/assets/images', () => ({
  pinActiveIconSrc: '~/assets/images/icons/pin-active.svg',
  pinIconSrc: '~/assets/images/icons/pin.svg',
}));

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');

  return {
    ...originalModule,
    useParams: () => ({
      id: PAGE_ID,
    }),
  };
});

jest.mock('~/store', () => {
  const originalModule = jest.requireActual('~/store');

  return {
    ...originalModule,
    appSlice: {
      ...originalModule.appSlice,
      toggleFavorite: (payload: ToggleFavoritePayload) => ({
        type: 'MOCK_TOGGLE_FAVORITE_ACTION',
        payload,
      }),
    },
    offerSlice: {
      ...originalModule.offerSlice,
      fetchOffer: (id: number) => ({
        type: 'MOCK_FETCH_OFFER_ACTION',
        payload: id,
      }),
    },
    offersSlice: {
      ...originalModule.offersSlice,
      fetchOffersNearby: (id: number) => ({
        type: 'MOCK_FETCH_OFFERS_NEARBY_ACTION',
        payload: id,
      }),
    },
    reviewSlice: {
      ...originalModule.reviewSlice,
      fetchReviews: () => ({
        type: 'MOCK_FETCH_REVIEWS_ACTION',
      }),
    },
  };
});

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

    render(<OfferPage />, renderOptions);

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

    const { store } = render(<OfferPage />, renderOptions);

    const [action] = store
      .getActions()
      .filter(({ type }) => type === 'MOCK_FETCH_OFFER_ACTION');

    expect(action).toEqual({
      type: 'MOCK_FETCH_OFFER_ACTION',
      payload: Number(PAGE_ID),
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

    render(<OfferPage />, renderOptions);

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

    render(<OfferPage />, renderOptions);

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

    render(<OfferPage />, renderOptions);

    expect(
      screen.getByText(/There are problems, please try again later/i),
    ).toBeInTheDocument();
  });
});
