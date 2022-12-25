import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { httpClient } from '~/services';
import { AppDispatch, PostReview } from '~/types';

import { fetchReviews, postReview } from './review';

const mockApiService = new MockAdapter(httpClient);
const middlewares = [thunk];

const mockStore = configureMockStore<unknown, AppDispatch>(middlewares);

describe('Async actions: reviews', () => {
  describe('fetchReviews', () => {
    const id = 1;

    it('should dispatch fetchReviews when GET "/comments/:hotel_id" and server return 200', async () => {
      const store = mockStore();

      mockApiService.onGet(`/comments/${id}`).reply(200, []);

      await store.dispatch(fetchReviews(id));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        fetchReviews.pending.type,
        fetchReviews.fulfilled.type,
      ]);
    });

    it('should dispatch fetchReviews when GET "/comments/:hotel_id" and server return 400', async () => {
      const store = mockStore();

      mockApiService.onGet(`/comments/${id}`).reply(400, []);

      await store.dispatch(fetchReviews(id));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        fetchReviews.pending.type,
        fetchReviews.rejected.type,
      ]);
    });
  });

  describe('postReview', () => {
    const review: PostReview = {
      comment: 'fake comment',
      id: 1,
      rating: 1,
    };

    it('should dispatch postReview when POST "/comments/:hotel_id" and server return 200', async () => {
      const store = mockStore();

      mockApiService.onPost(`/comments/${review.id}`).reply(200, []);

      await store.dispatch(postReview(review));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        postReview.pending.type,
        postReview.fulfilled.type,
      ]);
    });

    it('should dispatch postReview when POST "/comments/:hotel_id" and server return 400', async () => {
      const store = mockStore();

      mockApiService.onPost(`/comments/${review.id}`).reply(400, []);

      await store.dispatch(postReview(review));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        postReview.pending.type,
        postReview.rejected.type,
      ]);
    });

    it('should dispatch postReview when POST "/comments/:hotel_id" and server return 401', async () => {
      const store = mockStore();

      mockApiService.onPost(`/comments/${review.id}`).reply(401, []);

      await store.dispatch(postReview(review));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        postReview.pending.type,
        postReview.rejected.type,
      ]);
    });
  });
});
