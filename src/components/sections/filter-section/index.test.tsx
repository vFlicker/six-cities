import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';

import { CityName, Reducer } from '~/constants';
import { appSlice } from '~/store';

import { HistoryRouter } from '../../shared';
import { FilterSection } from './index';

const mockStore = configureMockStore();

const store = mockStore({
  [Reducer.App]: {
    currentCityName: CityName.Amsterdam,
  },
});

const history = createMemoryHistory();

describe('Component: FilterSection', () => {
  it('should render correctly', async () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <FilterSection />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getAllByRole('link')).toHaveLength(
      Object.values(CityName).length,
    );
  });

  it('handleClick logic should work correctly', async () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <FilterSection />
        </HistoryRouter>
      </Provider>,
    );

    await userEvent.click(
      screen.getByText(new RegExp(CityName.Amsterdam, 'i')),
    );

    expect(store.getActions()).toEqual([]);

    await userEvent.click(screen.getByText(new RegExp(CityName.Brussels, 'i')));

    expect(store.getActions()).toEqual([
      appSlice.changeCityName(CityName.Brussels),
    ]);
  });
});
