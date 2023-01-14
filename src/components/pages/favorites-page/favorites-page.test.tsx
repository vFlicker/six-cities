import { Reducer } from '~/constants';
import * as appStore from '~/tests/store/app';

import * as offersStore from '~/tests/store/offers';

import * as userStore from '~/tests/store/user';
import { renderWithProviders, RenderOptions, screen } from '~/tests/render';

import { FavoritesPage } from './favorites-page';

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
