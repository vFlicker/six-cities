import { makeError, makeOffer } from '~/utils';

import { toggleFavorite } from '../../api-actions/app';
import offerSlice, { fetchOffer } from './slice';
import { State } from './types';

const initialState: State = {
  offer: null,
  loading: false,
  error: null,
};

const offer = makeOffer();
const error = makeError();

describe('Slice: offer', () => {
  it('without additional parameters should return initial state', () => {
    const UNKNOWN_TYPE = { type: 'UNKNOWN_ACTION' };
    expect(offerSlice.reducer(undefined, UNKNOWN_TYPE)).toEqual(initialState);
  });

  describe('fetchOffer', () => {
    it('should update loading to "true" when fetchOffer pending', () => {
      const ACTION_TYPE = { type: fetchOffer.pending.type };

      const updatedState: State = {
        ...initialState,
        loading: true,
      };

      expect(offerSlice.reducer(initialState, ACTION_TYPE)).toEqual(
        updatedState,
      );
    });

    it('should update loading to "false" and add offer when fetchOffer is fulfilled', () => {
      const ACTION_TYPE = {
        type: fetchOffer.fulfilled.type,
        payload: offer,
      };

      const initialState: State = {
        offer: null,
        loading: true,
        error: null,
      };

      const updatedState: State = {
        ...initialState,
        offer: offer,
        loading: false,
      };

      expect(offerSlice.reducer(initialState, ACTION_TYPE)).toEqual(
        updatedState,
      );
    });

    it('should add error to state when fetchOffer is rejected', () => {
      const ACTION_TYPE = {
        type: fetchOffer.rejected.type,
        payload: error,
      };

      const updatedState: State = {
        ...initialState,
        loading: false,
        error: error,
      };

      expect(offerSlice.reducer(initialState, ACTION_TYPE)).toEqual(
        updatedState,
      );
    });

    it('should remove error from state when fetchOffer is pending or fulfilled', () => {
      const initialState: State = {
        offer: null,
        loading: false,
        error: error,
      };

      const PENDING_ACTION_TYPE = {
        type: fetchOffer.pending.type,
      };

      const pendingUpdatedState: State = {
        ...initialState,
        loading: true,
        error: null,
      };

      expect(offerSlice.reducer(initialState, PENDING_ACTION_TYPE)).toEqual(
        pendingUpdatedState,
      );

      const FULFILLED_ACTION_TYPE = {
        type: fetchOffer.fulfilled.type,
        payload: offer,
      };

      const fulfilledUpdatedState: State = {
        ...initialState,
        offer: offer,
        error: null,
      };

      expect(offerSlice.reducer(initialState, FULFILLED_ACTION_TYPE)).toEqual(
        fulfilledUpdatedState,
      );
    });
  });

  describe('toggleFavorite', () => {
    it('should update offer when toggleFavorite is fulfilled', () => {
      const ACTION_TYPE = {
        type: toggleFavorite.fulfilled.type,
        payload: offer,
      };

      const updatedState: State = {
        ...initialState,
        offer: offer,
        loading: false,
      };

      expect(offerSlice.reducer(initialState, ACTION_TYPE)).toEqual(
        updatedState,
      );
    });
  });
});
