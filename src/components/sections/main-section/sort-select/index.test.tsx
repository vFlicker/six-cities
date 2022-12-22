import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import '@testing-library/jest-dom';

import { Reducer, SortType } from '~/constants';

import { HistoryRouter } from '../../../shared/history-router';
import { SortSelect } from './index';
import { appSlice } from '~/store';

jest.mock('~/store', () => {
  const originalModule = jest.requireActual('~/store');

  return {
    ...originalModule,
    appSlice: {
      ...originalModule.appSlice,
      changeSortType: (sortType: SortType) => ({
        type: 'MOCK_CHANGE_SORT_TYPE_ACTION',
        payload: sortType,
      }),
    },
  };
});

const mockStore = configureMockStore();

const store = mockStore({
  [Reducer.App]: {
    currentSortType: SortType.Popular,
  },
});

const history = createMemoryHistory();

const app = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <SortSelect />
    </HistoryRouter>
  </Provider>
);

describe('Component: SortSelect', () => {
  it('should render correctly', () => {
    render(app);

    expect(screen.getByText(/Sort by/i)).toBeInTheDocument();

    expect(
      screen.getByText(new RegExp(SortType.Popular, 'i')),
    ).toBeInTheDocument();

    expect(screen.queryByTestId('select-item')).not.toBeInTheDocument();
  });

  it('should toggle menu when user click on button', async () => {
    render(app);

    const button = screen.getByRole('button');

    await userEvent.click(button);

    expect(screen.queryAllByTestId('select-item')).toHaveLength(
      Object.values(SortType).length,
    );

    await userEvent.click(button);

    expect(screen.queryByTestId('select-item')).not.toBeInTheDocument();
  });

  it('should close menu when user click on select item', async () => {
    render(app);

    const button = screen.getByRole('button');
    let selectItems = screen.queryAllByTestId('select-item');

    expect(selectItems).toHaveLength(0);

    await userEvent.click(button);

    selectItems = screen.queryAllByTestId('select-item');

    expect(selectItems).toHaveLength(Object.values(SortType).length);

    const priceToLowSelectItem = selectItems.find(
      (item) => item.innerHTML === SortType.PriceHighToLow,
    ) as HTMLElement;

    await userEvent.click(priceToLowSelectItem);

    selectItems = screen.queryAllByTestId('select-item');

    expect(selectItems).toHaveLength(0);
  });

  it('should dispatch changeSortType when user click on select item', async () => {
    render(app);

    const button = screen.getByRole('button');

    await userEvent.click(button);

    const selectItems = screen.queryAllByTestId('select-item');

    const priceToLowSelectItem = selectItems.find(
      (item) => item.innerHTML === SortType.PriceHighToLow,
    ) as HTMLElement;

    await userEvent.click(priceToLowSelectItem);

    const [firstAction] = store.getActions();
    expect(firstAction).toEqual(
      appSlice.changeSortType(SortType.PriceHighToLow),
    );
  });
});
