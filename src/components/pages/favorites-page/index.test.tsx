import { Reducer } from '~/constants';
import {
  appStore,
  offersStore,
  renderWithProviders,
  RenderOptions,
  screen,
  userStore,
} from '~/tests';

import { FavoritesPage } from './index';

describe('Component: FavoritesPage', () => {
  it('should render correctly', () => {
    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.App]: appStore.initialState,
        [Reducer.Offers]: offersStore.stateWithOffers,
        [Reducer.User]: userStore.authState,
      },
    };

    renderWithProviders(<FavoritesPage />, renderOptions);

    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
    expect(screen.getAllByAltText(/6 cities logo/i)).toHaveLength(2);
  });
});
