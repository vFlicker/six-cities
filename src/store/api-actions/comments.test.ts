import { Action } from '@reduxjs/toolkit';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';

import { createApiService } from '~/services';
import { State } from '~/types';

import { fetchComments, postComment, PostCommentPayload } from './comments';

const apiService = createApiService();
const mockApiService = new MockAdapter(apiService);
const middlewares = [thunk.withExtraArgument(apiService)];

const mockStore = configureMockStore<
  unknown,
  ThunkDispatch<State, typeof apiService, Action>
>(middlewares);

describe('Async actions: comments', () => {
  describe('fetchComments', () => {
    const id = 1;

    it('should dispatch fetchComments when GET "/comments/:hotel_id" and server return 200', async () => {
      const store = mockStore();

      mockApiService.onGet(`/comments/${id}`).reply(200, []);

      await store.dispatch(fetchComments(id));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        fetchComments.pending.type,
        fetchComments.fulfilled.type,
      ]);
    });

    it('should dispatch fetchComments when GET "/comments/:hotel_id" and server return 400', async () => {
      const store = mockStore();

      mockApiService.onGet(`/comments/${id}`).reply(400, []);

      await store.dispatch(fetchComments(id));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        fetchComments.pending.type,
        fetchComments.rejected.type,
      ]);
    });
  });

  describe('postComment', () => {
    const comment: PostCommentPayload = {
      comment: 'fake_comment',
      id: 1,
      rating: 1,
    };

    it('should dispatch postComment when POST "/comments/:hotel_id" and server return 200', async () => {
      const store = mockStore();

      mockApiService.onPost(`/comments/${comment.id}`).reply(200, []);

      await store.dispatch(postComment(comment));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        postComment.pending.type,
        postComment.fulfilled.type,
      ]);
    });

    it('should dispatch postComment when POST "/comments/:hotel_id" and server return 400', async () => {
      const store = mockStore();

      mockApiService.onPost(`/comments/${comment.id}`).reply(400, []);

      await store.dispatch(postComment(comment));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        postComment.pending.type,
        postComment.rejected.type,
      ]);
    });

    it('should dispatch postComment when POST "/comments/:hotel_id" and server return 401', async () => {
      const store = mockStore();

      mockApiService.onPost(`/comments/${comment.id}`).reply(401, []);

      await store.dispatch(postComment(comment));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        postComment.pending.type,
        postComment.rejected.type,
      ]);
    });
  });
});
