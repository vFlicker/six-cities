import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import '@testing-library/jest-dom';

import { AuthData } from '~/types';

import { HistoryRouter } from '../../shared/history-router';
import { LoginSection } from './index';

jest.mock('~/store', () => {
  const originalModule = jest.requireActual('~/store');

  return {
    ...originalModule,
    userSlice: {
      ...originalModule.userSlice,
      login: (payload: AuthData) => ({
        type: 'MOCK_LOGIN_ACTION',
        payload,
      }),
    },
  };
});

const mockStore = configureMockStore();

const store = mockStore({});

const history = createMemoryHistory();

describe('Component: LoginSection', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <LoginSection />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByTestId('email')).toBeInTheDocument();
    expect(screen.getByTestId('password')).toBeInTheDocument();
    expect(screen.getAllByText(/Sign in/i)).toHaveLength(2);
  });

  it('form should work correctly', async () => {
    const EMAIL = 'test@gmail.com';
    const PASSWORD = 'secret';

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <LoginSection />
        </HistoryRouter>
      </Provider>,
    );

    const emailElement = screen.getByTestId('email');
    const passwordElement = screen.getByTestId('password');
    const submitElement = screen.getByRole('button', { name: /Sign in/i });

    await userEvent.click(submitElement);

    // TODO: toBeUndefined
    expect(store.getActions()).toEqual([]);

    await userEvent.type(emailElement, EMAIL);
    await userEvent.type(passwordElement, PASSWORD);

    expect(
      screen.getByDisplayValue(new RegExp(EMAIL, 'i')),
    ).toBeInTheDocument();

    expect(
      screen.getByDisplayValue(new RegExp(PASSWORD, 'i')),
    ).toBeInTheDocument();

    await userEvent.click(submitElement);

    const [firstAction] = store.getActions();
    expect(firstAction).toEqual({
      type: 'MOCK_LOGIN_ACTION',
      payload: {
        email: EMAIL,
        password: PASSWORD,
      },
    });
  });
});
