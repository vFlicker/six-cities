import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import '@testing-library/jest-dom';

import { CityName, Reducer } from '~/constants';

import { HistoryRouter } from '../../shared/history-router';
import { LocationSection } from './index';

const mockStore = configureMockStore();

const store = mockStore({
  [Reducer.App]: {
    currentCityName: CityName.Amsterdam,
  },
});

const history = createMemoryHistory();

describe('Component: LocationSection', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <LocationSection />
        </HistoryRouter>
      </Provider>,
    );

    expect(
      screen.getByText(new RegExp(CityName.Amsterdam, 'i')),
    ).toBeInTheDocument();
  });
});
