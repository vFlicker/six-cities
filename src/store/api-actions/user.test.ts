import { mockApiService, mockStore } from './test-helpers';

import { checkAuthStatus } from './user';

describe('Async actions: user', () => {
  describe('checkAuthStatus', () => {
    it('should dispatch checkAuthStatus when GET "/login" and server return 200', async () => {
      const store = mockStore();

      mockApiService.onGet('/login').reply(200, {});

      expect(store.getActions()).toEqual([]);

      await store.dispatch(checkAuthStatus());

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        checkAuthStatus.pending.type,
        checkAuthStatus.fulfilled.type,
      ]);
    });

    it('should dispatch checkAuthStatus when GET "/login" and server return 401', async () => {
      const store = mockStore();

      mockApiService.onGet('/login').reply(401, {});

      expect(store.getActions()).toEqual([]);

      await store.dispatch(checkAuthStatus());

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        checkAuthStatus.pending.type,
        checkAuthStatus.rejected.type,
      ]);
    });
  });
});
