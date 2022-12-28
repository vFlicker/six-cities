import { error, makeOffer } from '~/utils';

import { toggleFavorite } from '../../api-actions/app';
import offerReducer, { fetchOffer } from './slice';
import { State } from './types';

const initialState: State = {
  offer: null,
  loading: false,
  error: null,
};

const loadingState: State = {
  ...initialState,
  loading: true,
};

const rejectedState: State = {
  ...initialState,
  error,
};

const offer = makeOffer();

describe('Slice: offer', () => {
  it('without additional parameters should return initial state', () => {
    const actionType = { type: 'UNKNOWN_ACTION' };
    expect(offerReducer(undefined, actionType)).toEqual(initialState);
  });

  describe('fetchOffer', () => {
    it('should return a state with updated the loading status when fetchOffer is pending', () => {
      const actionType = { type: fetchOffer.pending.type };

      const result = offerReducer(initialState, actionType);
      expect(result.loading).toBeTruthy();
    });

    it('should return a state with updated the loading status when fetchOffer is fulfilled', () => {
      const actionType = {
        type: fetchOffer.fulfilled.type,
        payload: offer,
      };

      const result = offerReducer(loadingState, actionType);
      expect(result.loading).toBeFalsy();
    });

    it('should return a state with updated offer when fetchOffer is fulfilled', () => {
      const actionType = {
        type: fetchOffer.fulfilled.type,
        payload: offer,
      };

      const result = offerReducer(loadingState, actionType);
      expect(result.offer).toEqual(offer);
    });

    it('should return a state with added error when fetchOffer is rejected', () => {
      const actionType = {
        type: fetchOffer.rejected.type,
        payload: error,
      };

      const result = offerReducer(initialState, actionType);
      expect(result.error).toEqual(error);
    });

    it('should return a state with removed error when fetchOffer is pending', () => {
      const actionType = {
        type: fetchOffer.pending.type,
      };

      const result = offerReducer(rejectedState, actionType);
      expect(result.error).toBeNull();
    });

    it('should return a state with removed error when fetchOffer is fulfilled', () => {
      const actionType = {
        type: fetchOffer.fulfilled.type,
        payload: offer,
      };

      const result = offerReducer(rejectedState, actionType);
      expect(result.error).toBeNull();
    });
  });

  describe('toggleFavorite', () => {
    it('should return a state with updated offer when toggleFavorite is fulfilled', () => {
      const actionType = {
        type: toggleFavorite.fulfilled.type,
        payload: offer,
      };

      const result = offerReducer(initialState, actionType);
      expect(result.offer).toEqual(offer);
    });
  });
});
