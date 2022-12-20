import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Reducer } from '~/constants';
import { makeOffer, makeUser } from '~/utils';

import { HistoryRouter } from '../../../../shared';
import { AuthList } from './index';

jest.mock('~/store', () => {
  const originalModule = jest.requireActual('~/store');

  return {
    ...originalModule,
    userSlice: {
      ...originalModule.userSlice,
      logout: () => ({ type: 'MOCK_LOGOUT_ACTION' }),
    },
  };
});

const mockStore = configureMockStore();

const history = createMemoryHistory();

const offer = makeOffer();
const user = makeUser();

describe('Component: AuthList', () => {
  it('should render correctly', () => {
    const store = mockStore({
      [Reducer.User]: {
        user,
      },
      [Reducer.Offers]: {
        favorites: [offer],
      },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <AuthList />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.queryByText(/Sign in/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
    expect(screen.getByTestId(/counter/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(2);
    expect(screen.getByText(user.email)).toBeInTheDocument();
  });

  it("should't render counter when there are 0 favorite offers", () => {
    const store = mockStore({
      [Reducer.User]: {
        user,
      },
      [Reducer.Offers]: {
        favorites: [],
      },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <AuthList />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.queryByTestId(/counter/i)).not.toBeInTheDocument();
  });

  it('handleClick logic should work correctly', async () => {
    const store = mockStore({
      [Reducer.User]: {
        user,
      },
      [Reducer.Offers]: {
        favorites: [],
      },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <AuthList />
        </HistoryRouter>
      </Provider>,
    );

    await userEvent.click(screen.getByText(/Sign out/i));

    const [firstAction] = store.getActions();
    expect(firstAction).toEqual({ type: 'MOCK_LOGOUT_ACTION' });
  });
});
