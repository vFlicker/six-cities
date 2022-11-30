import offerSlice from './slice';
import { State } from './types';

const initialState: State = {
  offer: null,
  loading: false,
  error: null,
};

describe('Slice: offer', () => {
  it('without additional parameters should return initial state', () => {
    const UNKNOWN_TYPE = { type: 'UNKNOWN_ACTION' };
    expect(offerSlice.reducer(undefined, UNKNOWN_TYPE)).toEqual(initialState);
  });
});
