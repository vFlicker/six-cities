import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { AuthStatus, FavoriteStatus, Reducer } from '~/constants';
import { httpClient } from '~/services';
import { AppDispatch } from '~/types';

import { fetchFavoriteOffers, fetchAllOffers } from '../slices/offers';
import { checkAuthStatus } from '../slices/user';
import { initializeApp, toggleFavorite } from './app';

const mockApiService = new MockAdapter(httpClient);
const middlewares = [thunk];

const mockStore = configureMockStore<unknown, AppDispatch>(middlewares);

describe('Async actions: app', () => {
  describe('initializeApp', () => {
    it('should dispatch initializeApp, checkAuthStatus, fetchAllOffers, fetchFavoriteOffers when POST "/login" and server return 200', async () => {
      const store = mockStore({
        [Reducer.User]: {
          authStatus: AuthStatus.Auth,
        },
      });

      mockApiService.onGet('/login').reply(200, {});
      mockApiService.onGet('/hotels').reply(200, []);
      mockApiService.onGet('/favorite').reply(200, []);

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

    it('should dispatch initializeApp, checkAuthStatus, fetchAllOffers when POST "/login" and server return 401', async () => {
      const store = mockStore({
        [Reducer.User]: { authStatus: AuthStatus.Unknown },
      });

      mockApiService.onGet('/login').reply(401, {});
      mockApiService.onGet('/hotels').reply(200, []);
      mockApiService.onGet('/favorite').reply(200, []);

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
    const id = 1;
    const status = FavoriteStatus.Add;

    it('should dispatch toggleFavorite when POST "/favorite/:hotel_id/:status" and server return 200', async () => {
      const store = mockStore();

      mockApiService.onPost(`/favorite/${id}/${status}`).reply(200, {});

      await store.dispatch(toggleFavorite({ id, status }));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        toggleFavorite.pending.type,
        toggleFavorite.fulfilled.type,
      ]);
    });

    it('should dispatch toggleFavorite when POST "/favorite/:hotel_id/:status" and server return 401', async () => {
      const store = mockStore();

      mockApiService.onPost(`/favorite/${id}/${status}`).reply(401, {});

      await store.dispatch(toggleFavorite({ id, status }));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        toggleFavorite.pending.type,
        toggleFavorite.rejected.type,
      ]);
    });
  });
});
