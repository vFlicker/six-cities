import { cityNames, Reducer } from '~/constants';
import { appStore, renderWithProviders, RenderOptions, screen } from '~/tests';

import { LocationSection } from './index';

describe('Component: LocationSection', () => {
  it('should render correctly', () => {
    const cityNameStub = cityNames[1];

    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.App]: appStore.initialState,
      },
    };

    renderWithProviders(
      <LocationSection cityName={cityNameStub} />,
      renderOptions,
    );

    expect(screen.getByText(new RegExp(cityNameStub, 'i'))).toBeInTheDocument();
  });
});
