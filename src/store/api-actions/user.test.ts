import { Action } from '@reduxjs/toolkit';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';

import { createApiService } from '~/services';
import { State } from '~/types';
import { makeUser } from '~/utils';

import { checkAuthStatus } from './user';

const user = makeUser();

describe('Async actions: user', () => {
  const apiService = createApiService();
  const mockApiService = new MockAdapter(apiService);
  const middlewares = [thunk.withExtraArgument(apiService)];

  const mockStore = configureMockStore<
    State,
    ThunkDispatch<State, typeof apiService, Action>
  >(middlewares);

  it('should authorization status is «AUTH» when server return 200', async () => {
    const store = mockStore();

    mockApiService.onGet('/login').reply(200, user);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuthStatus());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      checkAuthStatus.pending.type,
      checkAuthStatus.fulfilled.type,
    ]);
  });
});
