import MockAdapter from 'axios-mock-adapter';
import { StatusCodes } from 'http-status-codes';
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
    it('should dispatch checkAuthStatus when GET "/login" and server return "OK"', async () => {
      mockApiService.onGet('/login').reply(StatusCodes.OK, {});

      await store.dispatch(checkAuthStatus());

      const actionTypes = store.getActions().map(({ type }) => type);
      expect(actionTypes).toEqual([
        checkAuthStatus.pending.type,
        checkAuthStatus.fulfilled.type,
      ]);
    });

    it('should dispatch checkAuthStatus when GET "/login" and server return "UNAUTHORIZED"', async () => {
      mockApiService.onGet('/login').reply(StatusCodes.UNAUTHORIZED, {});

      await store.dispatch(checkAuthStatus());

      const actionTypes = store.getActions().map(({ type }) => type);
      expect(actionTypes).toEqual([
        checkAuthStatus.pending.type,
        checkAuthStatus.rejected.type,
      ]);
    });
  });

  describe('login', () => {
    it('should dispatch login when POST "/login" and server return "OK"', async () => {
      mockApiService.onPost('/login').reply(StatusCodes.OK, {});

      await store.dispatch(login(mockAuthData));

      const actionTypes = store.getActions().map(({ type }) => type);
      expect(actionTypes).toEqual([
        login.pending.type,
        redirectToRoute.type,
        login.fulfilled.type,
      ]);
    });

    it('should save token when POST "/login" and server return "OK"', async () => {
      const mockData = { token: 'test-token' };

      mockApiService.onPost('/login').reply(StatusCodes.OK, mockData);

      await store.dispatch(login(mockAuthData));

      expect(localStorage.setItem).toHaveBeenLastCalledWith(
        AUTH_TOKEN_KEY_NAME,
        mockData.token,
      );
    });

    it('should dispatch login when POST "/login" and server return "BAD_REQUEST', async () => {
      mockApiService.onPost('/login').reply(StatusCodes.BAD_REQUEST, {});

      await store.dispatch(login(mockAuthData));

      const actionTypes = store.getActions().map(({ type }) => type);
      expect(actionTypes).toEqual([login.pending.type, login.rejected.type]);
    });
  });

  describe('logout', () => {
    it('should dispatch logout when DELETE "/logout" and server return "NO_CONTENT"', async () => {
      mockApiService.onDelete('/logout').reply(StatusCodes.NO_CONTENT);

      await store.dispatch(logout());

      const actionTypes = store.getActions().map(({ type }) => type);
      expect(actionTypes).toEqual([logout.pending.type, logout.fulfilled.type]);
    });

    it('should remove token when DELETE "/logout" and server return "NO_CONTENT"', async () => {
      mockApiService.onDelete('/logout').reply(StatusCodes.NO_CONTENT);

      await store.dispatch(logout());

      expect(localStorage.removeItem).toHaveBeenLastCalledWith(
        AUTH_TOKEN_KEY_NAME,
      );
    });

    it('should dispatch logout when POST "/logout" and server return "BAD_REQUEST"', async () => {
      mockApiService.onDelete('/logout').reply(StatusCodes.BAD_REQUEST, {});

      await store.dispatch(logout());

      const actionTypes = store.getActions().map(({ type }) => type);
      expect(actionTypes).toEqual([logout.pending.type, logout.rejected.type]);
    });
  });
});
