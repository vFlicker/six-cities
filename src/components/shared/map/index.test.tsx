import { Reducer } from '~/constants';
import { appStore, offersStore, render, RenderOptions, screen } from '~/tests';

import { Map } from './index';

jest.mock('~/assets/images', () => ({
  pinActiveIconSrc: '~/assets/images/icons/pin-active.svg',
  pinIconSrc: '~/assets/images/icons/pin.svg',
}));

const renderOptions: RenderOptions = {
  preloadedState: {
    [Reducer.App]: appStore.initialState,
  },
};

describe('Component: Map', () => {
  it('should render correctly', () => {
    const { offers } = offersStore;

    render(<Map offers={offers} orientation="horizontal" />, renderOptions);
    expect(screen.getByTestId('map')).toBeInTheDocument();
  });
});
