import { AuthStatus } from '~/constants';

import userSlice from './slice';
import { State } from './types';

const initialState: State = {
  authStatus: AuthStatus.Unknown,
  user: null,
  loading: false,
  error: null,
};

describe('Slice: user', () => {
  it('without additional parameters should return initial state', () => {
    const UNKNOWN_TYPE = { type: 'UNKNOWN_ACTION' };
    expect(userSlice.reducer(undefined, UNKNOWN_TYPE)).toEqual(initialState);
  });
});
