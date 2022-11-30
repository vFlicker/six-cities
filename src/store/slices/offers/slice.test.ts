import offersSlice from './slice';
import { State } from './types';

const initialState: State = {
  all: [],
  favorites: [],
  nearby: [],
  loading: false,
  error: null,
};

describe('Slice: offers', () => {
  it('without additional parameters should return initial state', () => {
    const UNKNOWN_TYPE = { type: 'UNKNOWN_ACTION' };
    expect(offersSlice.reducer(undefined, UNKNOWN_TYPE)).toEqual(initialState);
  });
});
