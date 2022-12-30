import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { httpClient } from '~/services';
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
    it('should dispatch fetchOffer when GET "/hotels/:id" and server return 200', async () => {
      mockApiService.onGet(`/hotels/${mockId}`).reply(200, {});

      await store.dispatch(fetchOffer(mockId));

      const actionTypes = store.getActions().map(({ type }) => type);
      expect(actionTypes).toEqual([
        fetchOffer.pending.type,
        fetchOffer.fulfilled.type,
      ]);
    });

    it('should dispatch fetchOffer when GET "/hotels/:id" and server return 404', async () => {
      mockApiService.onGet(`/hotels/${mockId}`).reply(404, {});

      await store.dispatch(fetchOffer(mockId));

      const actionTypes = store.getActions().map(({ type }) => type);
      expect(actionTypes).toEqual([
        fetchOffer.pending.type,
        fetchOffer.rejected.type,
      ]);
    });
  });
});
