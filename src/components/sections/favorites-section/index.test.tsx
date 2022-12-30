import { CityName, Reducer } from '~/constants';
import {
  appStore,
  offersStore,
  render,
  RenderOptions,
  screen,
  userStore,
} from '~/tests';

import { FavoritesSection } from './index';

describe('Component: FavoritesSection', () => {
  it('should render correctly', () => {
    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.App]: appStore.initialState,
        [Reducer.Offers]: offersStore.stateWithOffers,
        [Reducer.User]: userStore.authState,
      },
    };

    render(<FavoritesSection />, renderOptions);

    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();

    expect(
      screen.getByText(new RegExp(CityName.Amsterdam, 'i')),
    ).toBeInTheDocument();

    expect(screen.getByText(offersStore.offer.title)).toBeInTheDocument();
  });

  it('should render FavoritesEmptySection', () => {
    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.Offers]: offersStore.initialState,
        [Reducer.User]: userStore.authState,
      },
    };

    render(<FavoritesSection />, renderOptions);

    expect(screen.getByText(/Nothing yet saved/i)).toBeInTheDocument();
  });

  it('should render Loader', () => {
    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.Offers]: offersStore.loadingState,
        [Reducer.User]: userStore.authState,
      },
    };

    render(<FavoritesSection />, renderOptions);

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('should render Error', () => {
    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.Offers]: offersStore.rejectedState,
        [Reducer.User]: userStore.authState,
      },
    };

    render(<FavoritesSection />, renderOptions);

    expect(
      screen.getByText(/There are problems, please try again later/i),
    ).toBeInTheDocument();
  });
});
