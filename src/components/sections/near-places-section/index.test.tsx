import { Reducer } from '~/constants';
import {
  appStore,
  mockPageId,
  offersStore,
  render,
  RenderOptions,
  screen,
} from '~/tests';

import { NearPlacesSection } from './index';

describe('Component: NearPlacesSection', () => {
  it('should render correctly', () => {
    const [offer] = offersStore.stateWithOffers.nearby;

    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.App]: appStore.initialState,
        [Reducer.Offers]: offersStore.stateWithOffers,
      },
    };

    render(<NearPlacesSection />, renderOptions);

    expect(
      screen.getByText(/Other places in the neighborhood/i),
    ).toBeInTheDocument();

    expect(screen.getByText(new RegExp(offer.title))).toBeInTheDocument();
  });

  it('should dispatch fetchOffersNearby when component loaded', () => {
    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.App]: appStore.initialState,
        [Reducer.Offers]: offersStore.stateWithOffers,
      },
    };

    const { store } = render(<NearPlacesSection />, renderOptions);

    const [firstAction] = store.getActions();
    expect(firstAction).toEqual({
      type: 'MOCK_FETCH_OFFERS_NEARBY_ACTION',
      payload: Number(mockPageId),
    });
  });

  it('should not be render', () => {
    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.App]: appStore.initialState,
        [Reducer.Offers]: offersStore.initialState,
      },
    };

    render(<NearPlacesSection />, renderOptions);

    expect(
      screen.queryByText(/No places to stay available/i),
    ).not.toBeInTheDocument();
  });

  it('should render Loader', () => {
    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.App]: appStore.initialState,
        [Reducer.Offers]: offersStore.loadingState,
      },
    };

    render(<NearPlacesSection />, renderOptions);

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('should render Error', () => {
    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.App]: appStore.rejectedState,
        [Reducer.Offers]: offersStore.rejectedState,
      },
    };

    render(<NearPlacesSection />, renderOptions);

    expect(
      screen.getByText(/There are problems, please try again later/i),
    ).toBeInTheDocument();
  });
});
