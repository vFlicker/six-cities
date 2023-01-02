import { Reducer } from '~/constants';
import { appStore, offersStore, render, RenderOptions, screen } from '~/tests';

import { Map } from './index';

describe('Component: Map', () => {
  it('should render correctly', () => {
    const offers = offersStore.stateWithOffers.all;

    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.App]: appStore.initialState,
      },
    };

    render(<Map offers={offers} orientation="horizontal" />, renderOptions);
    expect(screen.getByTestId('map')).toBeInTheDocument();
  });
});
