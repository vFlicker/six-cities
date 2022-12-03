import { makeOffer } from '~/utils';

import { toggleFavorite } from '../../api-actions/app';
import offerSlice, { fetchOffer } from './slice';
import { State } from './types';

const initialState: State = {
  offer: null,
  loading: false,
  error: null,
};

const offer = makeOffer();

const errorPayload = new Error('Same error...');

describe('Slice: offer', () => {
  it('without additional parameters should return initial state', () => {
    const UNKNOWN_TYPE = { type: 'UNKNOWN_ACTION' };
    expect(offerSlice.reducer(undefined, UNKNOWN_TYPE)).toEqual(initialState);
  });

  describe('fetchOffer', () => {
    it('should update loading to "true" if fetchOffer pending', () => {
      const ACTION_TYPE = { type: fetchOffer.pending.type };

      const updatedState: State = {
        ...initialState,
        loading: true,
      };

      expect(offerSlice.reducer(initialState, ACTION_TYPE)).toEqual(
        updatedState,
      );
    });

    it('should update loading to "false" and add offer if fetchOffer fulfilled', () => {
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

    it('should add error to error property if fetchOffer rejected', () => {
      const ACTION_TYPE = {
        type: fetchOffer.rejected.type,
        payload: errorPayload,
      };

      const updatedState: State = {
        ...initialState,
        loading: false,
        error: errorPayload,
      };

      expect(offerSlice.reducer(initialState, ACTION_TYPE)).toEqual(
        updatedState,
      );
    });

    it('should remove error from state if fetchOffer pending or fulfilled', () => {
      const initialState: State = {
        offer: null,
        loading: false,
        error: errorPayload,
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
    it('should update offer when toggleFavorite fulfilled', () => {
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
