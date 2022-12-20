import { Action } from '@reduxjs/toolkit';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';

import { createApiService } from '~/services';
import { token } from '~/services';
import { AuthData, State } from '~/types';
import { redirectToRoute } from '../slices/app';

import { checkAuthStatus, login, logout } from './user';

const apiService = createApiService();
const mockApiService = new MockAdapter(apiService);
const middlewares = [thunk.withExtraArgument(apiService)];

const mockStore = configureMockStore<
  unknown,
  ThunkDispatch<State, typeof apiService, Action>
>(middlewares);

const authData: AuthData = {
  email: 'mock-email@gmail.com',
  password: '123456',
};

describe('Async actions: user', () => {
  describe('checkAuthStatus', () => {
    it('should dispatch checkAuthStatus when GET "/login" and server return 200', async () => {
      const store = mockStore();

      mockApiService.onGet('/login').reply(200, {});

      await store.dispatch(checkAuthStatus());

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        checkAuthStatus.pending.type,
        checkAuthStatus.fulfilled.type,
      ]);
    });

    it('should dispatch checkAuthStatus when GET "/login" and server return 401', async () => {
      const store = mockStore();

      mockApiService.onGet('/login').reply(401, {});

      await store.dispatch(checkAuthStatus());

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        checkAuthStatus.pending.type,
        checkAuthStatus.rejected.type,
      ]);
    });
  });

  describe('login', () => {
    it('should dispatch login when POST "/login" and server return 200', async () => {
      const store = mockStore();

      mockApiService.onPost('/login').reply(200, { token: 'test-token' });

      await store.dispatch(login(authData));

      const actions = store.getActions().map(({ type }) => type);

      expect(localStorage.setItem).toHaveBeenLastCalledWith(
        token.AUTH_TOKEN_KEY_NAME,
        'test-token',
      );

      expect(actions).toEqual([
        login.pending.type,
        redirectToRoute.type,
        login.fulfilled.type,
      ]);
    });

    it('should dispatch login when POST "/login" and server return 400', async () => {
      const store = mockStore();

      mockApiService.onPost('/login').reply(400, {});

      await store.dispatch(login(authData));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([login.pending.type, login.rejected.type]);
    });
  });

  describe('logout', () => {
    it('should dispatch logout when DELETE "/logout" and server return 204', async () => {
      const store = mockStore();

      mockApiService.onDelete('/logout').reply(204);

      await store.dispatch(logout());

      const actions = store.getActions().map(({ type }) => type);

      expect(localStorage.removeItem).toHaveBeenLastCalledWith(
        token.AUTH_TOKEN_KEY_NAME,
      );

      expect(actions).toEqual([logout.pending.type, logout.fulfilled.type]);
    });

    it('should dispatch logout when POST "/logout" and server return 400', async () => {
      const store = mockStore();

      mockApiService.onDelete('/logout').reply(400, {});

      await store.dispatch(logout());

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([logout.pending.type, logout.rejected.type]);
    });
  });
});
