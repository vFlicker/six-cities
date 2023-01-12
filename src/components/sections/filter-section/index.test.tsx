import { CityName, cityNames, Reducer } from '~/constants';
import { appSlice } from '~/store';
import {
  appStore,
  renderWithProviders,
  RenderOptions,
  screen,
  userEvent,
} from '~/tests';

import { FilterSection } from './index';

const renderOptions: RenderOptions = {
  preloadedState: {
    [Reducer.App]: appStore.initialState,
  },
};

describe('Component: FilterSection', () => {
  it('should render correctly', async () => {
    renderWithProviders(<FilterSection />, renderOptions);

    const renderedLinks = screen.getAllByRole('link');
    const filterCount = cityNames.length;

    expect(renderedLinks).toHaveLength(filterCount);
  });

  it('should not dispatch changeCityName when an active link is clicked', async () => {
    const { store } = renderWithProviders(<FilterSection />, renderOptions);

    const activeLink = screen.getByText(new RegExp(CityName.Amsterdam, 'i'));
    await userEvent.click(activeLink);

    const [firstAction] = store.getActions();
    expect(firstAction).toBeUndefined();
  });

  it('should dispatch changeCityName when an inactive link is clicked', async () => {
    const { store } = renderWithProviders(<FilterSection />, renderOptions);

    const inactiveLink = screen.getByText(new RegExp(CityName.Brussels, 'i'));
    await userEvent.click(inactiveLink);

    const [firstAction] = store.getActions();
    expect(firstAction).toEqual(appSlice.changeCityName(CityName.Brussels));
  });
});
