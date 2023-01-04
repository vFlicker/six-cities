import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { AUTH_TOKEN_KEY_NAME, httpClient } from '~/services';
import { AppDispatch, AuthData, State } from '~/types';

import { redirectToRoute } from '../actions/app';
import { checkAuthStatus, login, logout } from './user';

const mockApiService = new MockAdapter(httpClient);

const middlewares = [thunk];
const mockStore = configureMockStore<State, AppDispatch>(middlewares);
const store = mockStore();

const mockAuthData: AuthData = {
  email: 'mock-email@gmail.com',
  password: '123456',
};

beforeEach(() => {
  store.clearActions();
});

describe('Async actions: user', () => {
  describe('checkAuthStatus', () => {
    it('should dispatch checkAuthStatus when GET "/login" and server return 200', async () => {
      mockApiService.onGet('/login').reply(200, {});

      await store.dispatch(checkAuthStatus());

      const actionTypes = store.getActions().map(({ type }) => type);
      expect(actionTypes).toEqual([
        checkAuthStatus.pending.type,
        checkAuthStatus.fulfilled.type,
      ]);
    });

    it('should dispatch checkAuthStatus when GET "/login" and server return 401', async () => {
      mockApiService.onGet('/login').reply(401, {});

      await store.dispatch(checkAuthStatus());

      const actionTypes = store.getActions().map(({ type }) => type);
      expect(actionTypes).toEqual([
        checkAuthStatus.pending.type,
        checkAuthStatus.rejected.type,
      ]);
    });
  });

  describe('login', () => {
    it('should dispatch login when POST "/login" and server return 200', async () => {
      mockApiService.onPost('/login').reply(200, {});

      await store.dispatch(login(mockAuthData));

      const actionTypes = store.getActions().map(({ type }) => type);
      expect(actionTypes).toEqual([
        login.pending.type,
        redirectToRoute.type,
        login.fulfilled.type,
      ]);
    });

    it('should save token when POST "/login" and server return 200', async () => {
      const mockData = { token: 'test-token' };

      mockApiService.onPost('/login').reply(200, mockData);

      await store.dispatch(login(mockAuthData));

      expect(localStorage.setItem).toHaveBeenLastCalledWith(
        AUTH_TOKEN_KEY_NAME,
        mockData.token,
      );
    });

    it('should dispatch login when POST "/login" and server return 400', async () => {
      mockApiService.onPost('/login').reply(400, {});

      await store.dispatch(login(mockAuthData));

      const actionTypes = store.getActions().map(({ type }) => type);
      expect(actionTypes).toEqual([login.pending.type, login.rejected.type]);
    });
  });

  describe('logout', () => {
    it('should dispatch logout when DELETE "/logout" and server return 204', async () => {
      mockApiService.onDelete('/logout').reply(204);

      await store.dispatch(logout());

      const actionTypes = store.getActions().map(({ type }) => type);
      expect(actionTypes).toEqual([logout.pending.type, logout.fulfilled.type]);
    });

    it('should remove token when DELETE "/logout" and server return 204', async () => {
      mockApiService.onDelete('/logout').reply(204);

      await store.dispatch(logout());

      expect(localStorage.removeItem).toHaveBeenLastCalledWith(
        AUTH_TOKEN_KEY_NAME,
      );
    });

    it('should dispatch logout when POST "/logout" and server return 400', async () => {
      mockApiService.onDelete('/logout').reply(400, {});

      await store.dispatch(logout());

      const actionTypes = store.getActions().map(({ type }) => type);
      expect(actionTypes).toEqual([logout.pending.type, logout.rejected.type]);
    });
  });
});
