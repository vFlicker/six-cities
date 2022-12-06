import { Action } from '@reduxjs/toolkit';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';

import { FavoriteStatus } from '~/constants';
import { createApiService } from '~/services';
import { State } from '~/types';

import { fetchFavoriteOffers, fetchAllOffers } from '../slices/offers';
import { checkAuthStatus } from '../slices/user';
import { initializeApp, toggleFavorite } from './app';

describe('Async actions: app', () => {
  const apiService = createApiService();
  const mockApiService = new MockAdapter(apiService);
  const middlewares = [thunk.withExtraArgument(apiService)];

  const mockStore = configureMockStore<
    State,
    ThunkDispatch<State, typeof apiService, Action>
  >(middlewares);

  describe('initializeApp', () => {
    it('should dispatch initializeApp, checkAuthStatus, fetchAllOffers, fetchFavoriteOffers when POST /login and server return 200', async () => {
      const store = mockStore();

      mockApiService.onGet('/login').reply(200, {});
      mockApiService.onGet('/hotels').reply(200, []);
      mockApiService.onGet('/favorite').reply(200, []);

      expect(store.getActions()).toEqual([]);

      await store.dispatch(initializeApp());

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        initializeApp.pending.type,
        fetchAllOffers.pending.type,
        checkAuthStatus.pending.type,
        fetchAllOffers.fulfilled.type,
        checkAuthStatus.fulfilled.type,
        fetchFavoriteOffers.pending.type,
        fetchFavoriteOffers.fulfilled.type,
        initializeApp.fulfilled.type,
      ]);
    });

    it('should dispatch initializeApp, checkAuthStatus, fetchAllOffers when POST /login and server return 401', async () => {
      const store = mockStore();

      mockApiService.onGet('/login').reply(401, {});
      mockApiService.onGet('/hotels').reply(200, []);
      mockApiService.onGet('/favorite').reply(200, []);

      expect(store.getActions()).toEqual([]);

      await store.dispatch(initializeApp());

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        initializeApp.pending.type,
        fetchAllOffers.pending.type,
        checkAuthStatus.pending.type,
        fetchAllOffers.fulfilled.type,
        checkAuthStatus.rejected.type,
        initializeApp.fulfilled.type,
      ]);
    });
  });

  describe('toggleFavorite', () => {
    it('should dispatch toggleFavorite when POST /favorite/1/1 and server return 200', async () => {
      const store = mockStore();

      const id = 1;
      const status = FavoriteStatus.Add;

      mockApiService.onPost(`/favorite/${id}/${status}`).reply(200, {});

      expect(store.getActions()).toEqual([]);

      await store.dispatch(toggleFavorite({ id, status }));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        toggleFavorite.pending.type,
        toggleFavorite.fulfilled.type,
      ]);
    });

    it('should dispatch toggleFavorite when POST /favorite/1/1 and server return 401', async () => {
      const store = mockStore();

      const id = 1;
      const status = FavoriteStatus.Add;

      mockApiService.onPost(`/favorite/${id}/${status}`).reply(401, {});

      expect(store.getActions()).toEqual([]);

      await store.dispatch(toggleFavorite({ id, status }));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        toggleFavorite.pending.type,
        toggleFavorite.rejected.type,
      ]);
    });
  });
});
