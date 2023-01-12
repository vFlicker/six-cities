import { CityName, Reducer } from '~/constants';
import { appStore, render, RenderOptions, screen } from '~/tests';

import { MainEmptySection } from './index';

describe('Component: MainEmptySection', () => {
  it('should render correctly', () => {
    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.App]: appStore.initialState,
      },
    };

    render(<MainEmptySection />, renderOptions);

    expect(screen.getByAltText(/No results icon/i)).toBeInTheDocument();
    expect(screen.getByText(/No places/i)).toBeInTheDocument();
    expect(screen.getByText(/We could not find/i)).toHaveTextContent(
      CityName.Amsterdam,
    );
  });
});