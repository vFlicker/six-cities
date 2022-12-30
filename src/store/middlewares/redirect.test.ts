import configureMockStore from 'redux-mock-store';
import { AppRoute } from '~/constants';

import { redirectToRoute } from '../actions/app';
import { redirect } from './redirect';

const fakeHistory = {
  location: { pathname: '' },
  push(path: string): void {
    this.location.pathname = path;
  },
};

jest.mock('~/browser-history.ts', () => ({
  browserHistory: fakeHistory,
}));

const middlewares = [redirect];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

beforeEach(() => {
  fakeHistory.push('');
});

describe('Middleware: redirect', () => {
  it('should be redirect to "/login"', () => {
    store.dispatch(redirectToRoute(AppRoute.Login));

    const [firstAction] = store.getActions();
    expect(firstAction).toEqual(redirectToRoute(AppRoute.Login));
    expect(fakeHistory.location.pathname).toBe(AppRoute.Login);
  });

  it('should not be redirect to "/login" when bad action', () => {
    store.dispatch({ type: 'BAD_ACTION', payload: AppRoute.Login });

    expect(fakeHistory.location.pathname).not.toBe(AppRoute.Login);
  });
});
