import { Action } from '@reduxjs/toolkit';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';

import { createApiService } from '~/services';
import { State } from '~/types';

const apiService = createApiService();
const mockApiService = new MockAdapter(apiService);
const middlewares = [thunk.withExtraArgument(apiService)];

const mockStore = configureMockStore<
  unknown,
  ThunkDispatch<State, typeof apiService, Action>
>(middlewares);

export { mockApiService, mockStore };

// TODO: create utils file in store dir?
// store
// --- utils
// ----- api-actions
// ----- middleware
// ----- app
// ----- offers
