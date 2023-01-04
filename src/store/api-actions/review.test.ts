import MockAdapter from 'axios-mock-adapter';
import { StatusCodes } from 'http-status-codes';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { httpClient } from '~/services';
import { AppDispatch, PostReview, State } from '~/types';

import { fetchReviews, postReview } from './review';

const mockApiService = new MockAdapter(httpClient);

const middlewares = [thunk];
const mockStore = configureMockStore<State, AppDispatch>(middlewares);
const store = mockStore();

const mockId = 1;

const mockReview: PostReview = {
  comment: 'fake comment',
  id: mockId,
  rating: 1,
};

beforeEach(() => {
  store.clearActions();
});

describe('Async actions: reviews', () => {
  describe('fetchReviews', () => {
    it('should dispatch fetchReviews when GET "/comments/:hotel_id" and server return "OK"', async () => {
      mockApiService.onGet(`/comments/${mockId}`).reply(StatusCodes.OK, []);

      await store.dispatch(fetchReviews(mockId));

      const actionTypes = store.getActions().map(({ type }) => type);
      expect(actionTypes).toEqual([
        fetchReviews.pending.type,
        fetchReviews.fulfilled.type,
      ]);
    });

    it('should dispatch fetchReviews when GET "/comments/:hotel_id" and server return "BAD_REQUEST"', async () => {
      mockApiService
        .onGet(`/comments/${mockId}`)
        .reply(StatusCodes.BAD_REQUEST, []);

      await store.dispatch(fetchReviews(mockId));

      const actionTypes = store.getActions().map(({ type }) => type);
      expect(actionTypes).toEqual([
        fetchReviews.pending.type,
        fetchReviews.rejected.type,
      ]);
    });
  });

  describe('postReview', () => {
    it('should dispatch postReview when POST "/comments/:hotel_id" and server return "OK"', async () => {
      mockApiService.onPost(`/comments/${mockId}`).reply(StatusCodes.OK, []);

      await store.dispatch(postReview(mockReview));

      const actionTypes = store.getActions().map(({ type }) => type);
      expect(actionTypes).toEqual([
        postReview.pending.type,
        postReview.fulfilled.type,
      ]);
    });

    it('should dispatch postReview when POST "/comments/:hotel_id" and server return "BAD_REQUEST"', async () => {
      mockApiService
        .onPost(`/comments/${mockId}`)
        .reply(StatusCodes.BAD_REQUEST, []);

      await store.dispatch(postReview(mockReview));

      const actionTypes = store.getActions().map(({ type }) => type);
      expect(actionTypes).toEqual([
        postReview.pending.type,
        postReview.rejected.type,
      ]);
    });

    it('should dispatch postReview when POST "/comments/:hotel_id" and server return "UNAUTHORIZED"', async () => {
      mockApiService
        .onPost(`/comments/${mockId}`)
        .reply(StatusCodes.UNAUTHORIZED, []);

      await store.dispatch(postReview(mockReview));

      const actionTypes = store.getActions().map(({ type }) => type);
      expect(actionTypes).toEqual([
        postReview.pending.type,
        postReview.rejected.type,
      ]);
    });
  });
});
