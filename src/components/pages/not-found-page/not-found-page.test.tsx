import { Reducer } from '~/constants';
import * as offersStore from '~/tests/store/offers';
import * as userStore from '~/tests/store/user';
import { renderWithProviders, RenderOptions, screen } from '~/tests/render';

import { NotFoundPage } from './not-found-page';

describe('Component: NotFoundPage', () => {
  const renderOptions: RenderOptions = {
    preloadedState: {
      [Reducer.Offers]: offersStore.stateWithOffers,
      [Reducer.User]: userStore.authState,
    },
  };

  it('should render correctly', () => {
    renderWithProviders(<NotFoundPage />, renderOptions);

    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
    expect(screen.getAllByAltText(/6 cities logo/i)).toHaveLength(2);
  });
});
