import { fetchOffer } from './offer';
import { mockApiService, mockStore } from './test-helpers';

describe('Async actions: offer', () => {
  describe('fetchOffer', () => {
    const id = 1;

    it('should dispatch fetchOffer when GET "/hotels/:id" and server return 200', async () => {
      const store = mockStore();

      mockApiService.onGet(`/hotels/${id}`).reply(200, {});

      expect(store.getActions()).toEqual([]);

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

      expect(store.getActions()).toEqual([]);

      await store.dispatch(fetchOffer(id));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        fetchOffer.pending.type,
        fetchOffer.rejected.type,
      ]);
    });
  });
});
