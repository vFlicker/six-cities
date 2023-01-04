import { Reducer } from '~/constants';
import { offersStore, render, RenderOptions, screen, userStore } from '~/tests';

import { NotFoundPage } from './index';

describe('Component: NotFoundPage', () => {
  const renderOptions: RenderOptions = {
    preloadedState: {
      [Reducer.Offers]: offersStore.stateWithOffers,
      [Reducer.User]: userStore.authState,
    },
  };

  it('should render correctly', () => {
    render(<NotFoundPage />, renderOptions);

    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
    expect(screen.getAllByAltText(/6 cities logo/i)).toHaveLength(2);
  });
});
