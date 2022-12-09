import { fetchComments, postComment, PostCommentPayload } from './comments';
import { mockApiService, mockStore } from './test-helpers';

describe('Async actions: comments', () => {
  describe('fetchComments', () => {
    const id = 1;

    it('should dispatch fetchComments when GET "/comments/:hotel_id" and server return 200', async () => {
      const store = mockStore();

      mockApiService.onGet(`/comments/${id}`).reply(200, []);

      expect(store.getActions()).toEqual([]);

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

      expect(store.getActions()).toEqual([]);

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

      expect(store.getActions()).toEqual([]);

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

      expect(store.getActions()).toEqual([]);

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

      expect(store.getActions()).toEqual([]);

      await store.dispatch(postComment(comment));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        postComment.pending.type,
        postComment.rejected.type,
      ]);
    });
  });
});
