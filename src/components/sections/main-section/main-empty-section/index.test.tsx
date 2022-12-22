import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { CityName, Reducer } from '~/constants';

import { MainEmptySection } from './index';

const mockStore = configureMockStore();

const store = mockStore({
  [Reducer.App]: {
    currentCityName: CityName.Paris,
  },
});

describe('Component: MainEmptySection', () => {
  it('should render correctly', () => {
    const alt = 'No results icon';
    const description = 'No places to stay available';
    const title = 'We could not find any property available at the moment in';

    render(
      <Provider store={store}>
        <MainEmptySection />
      </Provider>,
    );

    expect(screen.getByAltText(new RegExp(alt, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(description, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(title, 'i'))).toHaveTextContent(
      CityName.Paris,
    );
  });
});
