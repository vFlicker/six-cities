import { cityNames, Reducer } from '~/constants';
import { appStore, render, RenderOptions, screen } from '~/tests';

import { LocationSection } from './index';

describe('Component: LocationSection', () => {
  it('should render correctly', () => {
    const cityNameStub = cityNames[1];

    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.App]: appStore.initialState,
      },
    };

    render(<LocationSection cityName={cityNameStub} />, renderOptions);

    expect(screen.getByText(new RegExp(cityNameStub, 'i'))).toBeInTheDocument();
  });
});
