import { StatusCodes } from 'http-status-codes';
import configureMockStore from 'redux-mock-store';

import { loginNotification } from './login-notification';

const fakeToast = {
  message: '',
  info(message: string): void {
    this.message = message;
  },
};

jest.mock('react-toastify', () => ({
  toast: fakeToast,
}));

const middlewares = [loginNotification];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

beforeEach(() => {
  fakeToast.info('');
});

describe('Middleware: loginNotification', () => {
  it('should show toast with text when status code "UNAUTHORIZED"', () => {
    store.dispatch({
      type: 'checkAuthStatus/rejected',
      payload: {
        message: 'You are not logged',
        statusCode: StatusCodes.UNAUTHORIZED,
      },
      meta: {
        requestId: 'M7FarVTTOlAC1qwe3X6qH',
        rejectedWithValue: true,
        requestStatus: 'rejected',
      },
    });

    expect(fakeToast.message).toBe('You are not logged');
  });

  it('should not show toast when status code is not "UNAUTHORIZED', () => {
    store.dispatch({
      type: 'checkAuthStatus/rejected',
      payload: {
        message: 'You are not logged',
        statusCode: StatusCodes.BAD_REQUEST,
      },
      meta: {
        requestId: 'M7FarVTTOlAC1qwe3X6qH',
        rejectedWithValue: true,
        requestStatus: 'rejected',
      },
    });

    expect(fakeToast.message).toBe('');
  });

  it('should not show toast when action is not rejected', () => {
    store.dispatch({
      type: 'checkAuthStatus/fulfilled',
      payload: [],
      meta: {
        requestId: 'fm7WR1xycdl9U8KKEmpG-',
        requestStatus: 'fulfilled',
      },
    });

    expect(fakeToast.message).toBe('');
  });
});
