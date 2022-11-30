import commentSlice from './slice';
import { State } from './types';

const initialState: State = {
  comments: [],
  loading: false,
  error: null,
};

describe('Slice: comments', () => {
  it('without additional parameters should return initial state', () => {
    const UNKNOWN_TYPE = { type: 'UNKNOWN_ACTION' };
    expect(commentSlice.reducer(undefined, UNKNOWN_TYPE)).toEqual(initialState);
  });
});
