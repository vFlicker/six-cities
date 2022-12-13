import configureMockStore from 'redux-mock-store';

import { normalizePayload } from './normalize-payload';

const middlewares = [normalizePayload];
const mockStore = configureMockStore(middlewares);

const serverResponse = {
  camelize_keys_1: 1,
  camelize_keys_2: {
    camelize_keys_3: 3,
  },
};

const normalizeResponse = {
  camelizeKeys1: 1,
  camelizeKeys2: {
    camelizeKeys3: 3,
  },
};

describe('Middleware: normalizePayload', () => {
  it('should normalize payload when requestStatus is "fulfilled"', () => {
    const store = mockStore();

    store.dispatch({
      type: 'fetch_type',
      meta: { requestStatus: 'fulfilled' },
      payload: serverResponse,
    });

    expect(store.getActions()).toEqual([
      {
        type: 'fetch_type',
        meta: { requestStatus: 'fulfilled' },
        payload: normalizeResponse,
      },
    ]);
  });

  it('should\'t normalize payload when requestStatus is "rejected"', () => {
    const store = mockStore();

    store.dispatch({
      type: 'fetch_type',
      meta: { requestStatus: 'rejected' },
      payload: serverResponse,
    });

    expect(store.getActions()).toEqual([
      {
        type: 'fetch_type',
        meta: { requestStatus: 'rejected' },
        payload: serverResponse,
      },
    ]);
  });

  it("should't normalize payload when payload is empty", () => {
    const store = mockStore();

    store.dispatch({
      type: 'fetch_type',
      meta: { requestStatus: 'fulfilled' },
    });

    expect(store.getActions()).toEqual([
      {
        type: 'fetch_type',
        meta: { requestStatus: 'fulfilled' },
      },
    ]);
  });
});
