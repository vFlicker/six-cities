import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { httpClient } from '~/services';
import { AppDispatch } from '~/types';

import {
  fetchAllOffers,
  fetchFavoriteOffers,
  fetchOffersNearby,
} from './offers';

const mockApiService = new MockAdapter(httpClient);
const middlewares = [thunk];

const mockStore = configureMockStore<unknown, AppDispatch>(middlewares);

describe('Async actions: offers', () => {
  describe('fetchAllOffers', () => {
    it('should dispatch fetchAllOffers when GET "/hotels" and server return 200', async () => {
      const store = mockStore();

      mockApiService.onGet('/hotels').reply(200, []);

      await store.dispatch(fetchAllOffers());

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        fetchAllOffers.pending.type,
        fetchAllOffers.fulfilled.type,
      ]);
    });

    it('should dispatch fetchAllOffers when GET "/hotels" and server return 404', async () => {
      const store = mockStore();

      mockApiService.onGet('/hotels').reply(404, []);

      await store.dispatch(fetchAllOffers());

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        fetchAllOffers.pending.type,
        fetchAllOffers.rejected.type,
      ]);
    });
  });

  describe('fetchFavoriteOffers', () => {
    it('should dispatch fetchFavoriteOffers when GET "/favorite" and server return 200', async () => {
      const store = mockStore();

      mockApiService.onGet('/favorite').reply(200, []);

      await store.dispatch(fetchFavoriteOffers());

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        fetchFavoriteOffers.pending.type,
        fetchFavoriteOffers.fulfilled.type,
      ]);
    });

    it('should dispatch fetchFavoriteOffers when GET "/favorite" and server return 401', async () => {
      const store = mockStore();

      mockApiService.onGet('/favorite').reply(401, []);

      await store.dispatch(fetchFavoriteOffers());

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        fetchFavoriteOffers.pending.type,
        fetchFavoriteOffers.rejected.type,
      ]);
    });
  });

  describe('fetchOffersNearby', () => {
    it('should dispatch fetchOffersNearby when GET "/hotels/:hotel_id/nearby" and server return 200', async () => {
      const store = mockStore();
      const id = 1;

      mockApiService.onGet(`/hotels/${id}/nearby`).reply(200, []);

      await store.dispatch(fetchOffersNearby(id));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        fetchOffersNearby.pending.type,
        fetchOffersNearby.fulfilled.type,
      ]);
    });

    it('should dispatch fetchOffersNearby when GET "/hotels/:hotel_id/nearby" and server return 401', async () => {
      const store = mockStore();
      const id = 1;

      mockApiService.onGet(`/hotels/${id}/nearby`).reply(401, []);

      await store.dispatch(fetchOffersNearby(id));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        fetchOffersNearby.pending.type,
        fetchOffersNearby.rejected.type,
      ]);
    });
  });
});
