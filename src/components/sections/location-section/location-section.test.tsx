import { cityNames, Reducer } from '~/constants';
import { renderWithProviders, RenderOptions, screen } from '~/tests/render';
import { initialState } from '~/tests/store/app';

import { LocationSection } from './location-section';

describe('Component: LocationSection', () => {
  it('should render correctly', () => {
    const cityNameStub = cityNames[1];

    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.App]: initialState,
      },
    };

    renderWithProviders(
      <LocationSection cityName={cityNameStub} />,
      renderOptions,
    );

    expect(screen.getByText(new RegExp(cityNameStub, 'i'))).toBeInTheDocument();
  });
});
