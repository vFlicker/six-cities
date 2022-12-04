import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';

import { HistoryRouter } from '~/components/shared';
import { AuthStatus, Reducer } from '~/constants';
import { makeOffer } from '~/utils';

import { NotFoundPage } from './index';

const mockStore = configureMockStore();

const store = mockStore({
  [Reducer.User]: {
    authStatus: AuthStatus.Auth,
  },
  [Reducer.Offers]: {
    favorites: [makeOffer()],
  },
});

describe('Component: NotFoundPage', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <NotFoundPage />
        </HistoryRouter>
      </Provider>,
    );

    // TODO: count in header
    // const

    const mainTitle = screen.getByText('Page not found');
    const subTitle = screen.getByText(
      'The page you are looking for does not exist',
    );

    expect(mainTitle).toBeInTheDocument();
    expect(subTitle).toBeInTheDocument();
  });
});
