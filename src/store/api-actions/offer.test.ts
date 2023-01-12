import MockAdapter from 'axios-mock-adapter';
import { StatusCodes } from 'http-status-codes';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { httpClient } from '~/services/api/http-client';
import { AppDispatch } from '~/types';

import { fetchOffer } from './offer';

const mockApiService = new MockAdapter(httpClient);

const middlewares = [thunk];
const mockStore = configureMockStore<unknown, AppDispatch>(middlewares);
const store = mockStore();

const mockId = 1;

beforeEach(() => {
  store.clearActions();
});

describe('Async actions: offer', () => {
  describe('fetchOffer', () => {
    it('should dispatch fetchOffer when GET "/hotels/:id" and server return "OK"', async () => {
      mockApiService.onGet(`/hotels/${mockId}`).reply(StatusCodes.OK, {});

      await store.dispatch(fetchOffer(mockId));

      const actionTypes = store.getActions().map(({ type }) => type);
      expect(actionTypes).toEqual([
        fetchOffer.pending.type,
        fetchOffer.fulfilled.type,
      ]);
    });

    it('should dispatch fetchOffer when GET "/hotels/:id" and server return "NOT_FOUND"', async () => {
      mockApiService
        .onGet(`/hotels/${mockId}`)
        .reply(StatusCodes.NOT_FOUND, {});

      await store.dispatch(fetchOffer(mockId));

      const actionTypes = store.getActions().map(({ type }) => type);
      expect(actionTypes).toEqual([
        fetchOffer.pending.type,
        fetchOffer.rejected.type,
      ]);
    });
  });
});
