import MockAdapter from 'axios-mock-adapter';
import { StatusCodes } from 'http-status-codes';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { FavoriteStatus } from '~/constants';
import { httpClient } from '~/services';
import { AppDispatch } from '~/types';

import { toggleFavorite } from './app';

const mockApiService = new MockAdapter(httpClient);

const middlewares = [thunk];
const mockStore = configureMockStore<unknown, AppDispatch>(middlewares);
const store = mockStore();

const mockId = 1;
const status = FavoriteStatus.Add;

beforeEach(() => {
  store.clearActions();
});

describe('Async actions: app', () => {
  describe('toggleFavorite', () => {
    it('should dispatch toggleFavorite when POST "/favorite/:hotel_id/:status" and server return "OK"', async () => {
      mockApiService
        .onPost(`/favorite/${mockId}/${status}`)
        .reply(StatusCodes.OK, {});

      await store.dispatch(toggleFavorite({ id: mockId, status }));

      const actionTypes = store.getActions().map(({ type }) => type);
      expect(actionTypes).toEqual([
        toggleFavorite.pending.type,
        toggleFavorite.fulfilled.type,
      ]);
    });

    it('should dispatch toggleFavorite when POST "/favorite/:hotel_id/:status" and server return "UNAUTHORIZED"', async () => {
      mockApiService
        .onPost(`/favorite/${mockId}/${status}`)
        .reply(StatusCodes.UNAUTHORIZED, {});

      await store.dispatch(toggleFavorite({ id: mockId, status }));

      const actionTypes = store.getActions().map(({ type }) => type);
      expect(actionTypes).toEqual([
        toggleFavorite.pending.type,
        toggleFavorite.rejected.type,
      ]);
    });
  });
});
