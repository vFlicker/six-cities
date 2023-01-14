import { Reducer } from '~/constants';
import * as appStore from '~/tests/store/app';
import * as offersStore from '~/tests/store/offers';
import { RenderOptions, renderWithProviders, screen } from '~/tests/render';

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
