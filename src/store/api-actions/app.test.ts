import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { FavoriteStatus } from '~/constants';
import { httpClient } from '~/services';
import { AppDispatch } from '~/types';

import { toggleFavorite } from './app';

const mockApiService = new MockAdapter(httpClient);
const middlewares = [thunk];

const mockStore = configureMockStore<unknown, AppDispatch>(middlewares);

describe('Async actions: app', () => {
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
