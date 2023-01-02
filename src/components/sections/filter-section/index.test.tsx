import { CityName, Reducer } from '~/constants';
import { appSlice } from '~/store';
import { appStore, render, RenderOptions, screen, userEvent } from '~/tests';

import { FilterSection } from './index';

const renderOptions: RenderOptions = {
  preloadedState: {
    [Reducer.App]: appStore.initialState,
  },
};

describe('Component: FilterSection', () => {
  it('should render correctly', async () => {
    render(<FilterSection />, renderOptions);

    const renderedLinks = screen.getAllByRole('link');
    const filterCount = Object.values(CityName).length;

    expect(renderedLinks).toHaveLength(filterCount);
  });

  it('should not dispatch changeCityName when an active link is clicked', async () => {
    const { store } = render(<FilterSection />, renderOptions);

    const activeLink = screen.getByText(new RegExp(CityName.Amsterdam, 'i'));
    await userEvent.click(activeLink);

    const [firstAction] = store.getActions();
    expect(firstAction).toBeUndefined();
  });

  it('should dispatch changeCityName when an inactive link is clicked', async () => {
    const { store } = render(<FilterSection />, renderOptions);

    const inactiveLink = screen.getByText(new RegExp(CityName.Brussels, 'i'));
    await userEvent.click(inactiveLink);

    const [firstAction] = store.getActions();
    expect(firstAction).toEqual(appSlice.changeCityName(CityName.Brussels));
  });
});
