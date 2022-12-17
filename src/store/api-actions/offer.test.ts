import { Action } from '@reduxjs/toolkit';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';

import { createApiService } from '~/services';
import { State } from '~/types';

import { fetchOffer } from './offer';

const apiService = createApiService();
const mockApiService = new MockAdapter(apiService);
const middlewares = [thunk.withExtraArgument(apiService)];

const mockStore = configureMockStore<
  unknown,
  ThunkDispatch<State, typeof apiService, Action>
>(middlewares);

describe('Async actions: offer', () => {
  describe('fetchOffer', () => {
    const id = 1;

    it('should dispatch fetchOffer when GET "/hotels/:id" and server return 200', async () => {
      const store = mockStore();

      mockApiService.onGet(`/hotels/${id}`).reply(200, {});

      await store.dispatch(fetchOffer(id));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        fetchOffer.pending.type,
        fetchOffer.fulfilled.type,
      ]);
    });

    it('should dispatch fetchOffer when GET "/hotels/:id" and server return 404', async () => {
      const store = mockStore();

      mockApiService.onGet(`/hotels/${id}`).reply(404, {});

      await store.dispatch(fetchOffer(id));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        fetchOffer.pending.type,
        fetchOffer.rejected.type,
      ]);
    });
  });
});
