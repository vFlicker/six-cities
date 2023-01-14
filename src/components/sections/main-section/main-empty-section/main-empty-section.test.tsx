import { CityName, Reducer } from '~/constants';
import { renderWithProviders, RenderOptions, screen } from '~/tests/render';
import { initialState } from '~/tests/store/app';

import { MainEmptySection } from './main-empty-section';

describe('Component: MainEmptySection', () => {
  it('should render correctly', () => {
    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.App]: initialState,
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
