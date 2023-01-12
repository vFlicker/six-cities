import { Reducer, SortType } from '~/constants';
import { appSlice } from '~/store';
import {
  appStore,
  renderWithProviders,
  RenderOptions,
  screen,
  userEvent,
} from '~/tests';

import { SortSelect } from './sort-select';

const renderOptions: RenderOptions = {
  preloadedState: {
    [Reducer.App]: appStore.initialState,
  },
};

const sortTypes = Object.values(SortType);
const listItemCount = sortTypes.length;

describe('Component: SortSelect', () => {
  it('should render correctly', () => {
    renderWithProviders(<SortSelect />, renderOptions);

    expect(screen.getByText(/Sort by/i)).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(SortType.Popular, 'i')),
    ).toBeInTheDocument();
    expect(screen.queryByTestId('select-item')).not.toBeInTheDocument();
  });

  it('should toggle menu when click on button', async () => {
    renderWithProviders(<SortSelect />, renderOptions);

    const menuToggler = screen.getByRole('button');

    expect(screen.queryAllByTestId('select-item')).toHaveLength(0);

    await userEvent.click(menuToggler);

    expect(screen.queryAllByTestId('select-item')).toHaveLength(listItemCount);

    await userEvent.click(menuToggler);

    expect(screen.queryAllByTestId('select-item')).toHaveLength(0);
  });

  it('should not close menu when click on active select item', async () => {
    renderWithProviders(<SortSelect />, renderOptions);

    await userEvent.click(screen.getByRole('button'));

    const [activeSelectItem] = screen.queryAllByTestId('select-item');
    await userEvent.click(activeSelectItem);

    expect(screen.queryAllByTestId('select-item')).toHaveLength(listItemCount);
  });

  it('should close menu when click on inactive select item', async () => {
    renderWithProviders(<SortSelect />, renderOptions);

    await userEvent.click(screen.getByRole('button'));

    const [, inactiveSelectItem] = screen.queryAllByTestId('select-item');
    await userEvent.click(inactiveSelectItem);

    expect(screen.queryAllByTestId('select-item')).toHaveLength(0);
  });

  it('should dispatch changeSortType when click on select item', async () => {
    const { store } = renderWithProviders(<SortSelect />, renderOptions);

    await userEvent.click(screen.getByRole('button'));

    const [, inactiveSelectItem] = screen.queryAllByTestId('select-item');
    await userEvent.click(inactiveSelectItem);

    const [firstAction] = store.getActions();
    const [, priceHighToLow] = sortTypes;
    expect(firstAction).toEqual(appSlice.changeSortType(priceHighToLow));
  });
});
