import { CityName, Reducer } from '~/constants';
import { appStore, renderWithProviders, RenderOptions, screen } from '~/tests';

import { MainEmptySection } from './main-empty-section';

describe('Component: MainEmptySection', () => {
  it('should render correctly', () => {
    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.App]: appStore.initialState,
      },
    };

    renderWithProviders(<MainEmptySection />, renderOptions);

    expect(screen.getByAltText(/No results icon/i)).toBeInTheDocument();
    expect(screen.getByText(/No places/i)).toBeInTheDocument();
    expect(screen.getByText(/We could not find/i)).toHaveTextContent(
      CityName.Amsterdam,
    );
  });
});
