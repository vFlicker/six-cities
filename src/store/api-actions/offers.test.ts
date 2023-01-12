import MockAdapter from 'axios-mock-adapter';
import { StatusCodes } from 'http-status-codes';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { httpClient } from '~/services/api/http-client';
import { AppDispatch } from '~/types';

import {
  fetchAllOffers,
  fetchFavoriteOffers,
  fetchOffersNearby,
} from './offers';

const mockApiService = new MockAdapter(httpClient);

const middlewares = [thunk];
const mockStore = configureMockStore<unknown, AppDispatch>(middlewares);
const store = mockStore();

const mockId = 1;

beforeEach(() => {
  store.clearActions();
});

describe('Async actions: offers', () => {
  describe('fetchAllOffers', () => {
    it('should dispatch fetchAllOffers when GET "/hotels" and server return "OK"', async () => {
      mockApiService.onGet('/hotels').reply(StatusCodes.OK, []);

      await store.dispatch(fetchAllOffers());

      const actionTypes = store.getActions().map(({ type }) => type);
      expect(actionTypes).toEqual([
        fetchAllOffers.pending.type,
        fetchAllOffers.fulfilled.type,
      ]);
    });

    it('should dispatch fetchAllOffers when GET "/hotels" and server return "NOT_FOUND"', async () => {
      mockApiService.onGet('/hotels').reply(StatusCodes.NOT_FOUND, []);

      await store.dispatch(fetchAllOffers());

      const actionTypes = store.getActions().map(({ type }) => type);
      expect(actionTypes).toEqual([
        fetchAllOffers.pending.type,
        fetchAllOffers.rejected.type,
      ]);
    });
  });

  describe('fetchFavoriteOffers', () => {
    it('should dispatch fetchFavoriteOffers when GET "/favorite" and server return "OK"', async () => {
      mockApiService.onGet('/favorite').reply(StatusCodes.OK, []);

      await store.dispatch(fetchFavoriteOffers());

      const actionTypes = store.getActions().map(({ type }) => type);
      expect(actionTypes).toEqual([
        fetchFavoriteOffers.pending.type,
        fetchFavoriteOffers.fulfilled.type,
      ]);
    });

    it('should dispatch fetchFavoriteOffers when GET "/favorite" and server return "UNAUTHORIZED"', async () => {
      mockApiService.onGet('/favorite').reply(StatusCodes.UNAUTHORIZED, []);

      await store.dispatch(fetchFavoriteOffers());

      const actionTypes = store.getActions().map(({ type }) => type);
      expect(actionTypes).toEqual([
        fetchFavoriteOffers.pending.type,
        fetchFavoriteOffers.rejected.type,
      ]);
    });
  });

  describe('fetchOffersNearby', () => {
    it('should dispatch fetchOffersNearby when GET "/hotels/:hotel_id/nearby" and server return "OK"', async () => {
      mockApiService
        .onGet(`/hotels/${mockId}/nearby`)
        .reply(StatusCodes.OK, []);

      await store.dispatch(fetchOffersNearby(mockId));

      const actions = store.getActions().map(({ type }) => type);
      expect(actions).toEqual([
        fetchOffersNearby.pending.type,
        fetchOffersNearby.fulfilled.type,
      ]);
    });

    it('should dispatch fetchOffersNearby when GET "/hotels/:hotel_id/nearby" and server return "UNAUTHORIZED"', async () => {
      mockApiService
        .onGet(`/hotels/${mockId}/nearby`)
        .reply(StatusCodes.UNAUTHORIZED, []);

      await store.dispatch(fetchOffersNearby(mockId));

      const actions = store.getActions().map(({ type }) => type);
      expect(actions).toEqual([
        fetchOffersNearby.pending.type,
        fetchOffersNearby.rejected.type,
      ]);
    });
  });
});
