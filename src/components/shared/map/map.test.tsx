import { Reducer } from '~/constants';
import {
  appStore,
  offersStore,
  renderWithProviders,
  RenderOptions,
  screen,
} from '~/tests';

import { Map } from './map';

describe('Component: Map', () => {
  it('should render correctly', () => {
    const offers = offersStore.stateWithOffers.all;

    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.App]: appStore.initialState,
      },
    };

    renderWithProviders(
      <Map offers={offers} orientation="horizontal" />,
      renderOptions,
    );
    expect(screen.getByTestId('map')).toBeInTheDocument();
  });
});
