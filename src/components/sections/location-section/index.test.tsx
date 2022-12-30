import { CityName, Reducer } from '~/constants';
import { appStore, render, RenderOptions, screen } from '~/tests';

import { LocationSection } from './index';

describe('Component: LocationSection', () => {
  it('should render correctly', () => {
    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.App]: appStore.initialState,
      },
    };

    render(<LocationSection />, renderOptions);

    expect(
      screen.getByText(new RegExp(CityName.Amsterdam, 'i')),
    ).toBeInTheDocument();
  });
});
