import { offerStore } from '~/tests';
import { error } from '~/utils';

import { toggleFavorite } from '../../api-actions/app';
import offerReducer, { fetchOffer } from './slice';

const {
  initialState,
  loadingState,
  rejectedState,
  stateWithOffer,
  stateWithUpdatedOffer,
} = offerStore;

describe('Slice: offer', () => {
  it('without additional parameters should return initial state', () => {
    const actionType = { type: 'UNKNOWN_ACTION' };
    expect(offerReducer(undefined, actionType)).toEqual(initialState);
  });

  describe('fetchOffer', () => {
    it('should return a state with the loading status "true" when fetchOffer is pending', () => {
      const actionType = { type: fetchOffer.pending.type };

      const result = offerReducer(initialState, actionType);
      expect(result.loading).toBeTruthy();
    });

    it('should return a state with loading status "false" when fetchOffer is fulfilled', () => {
      const actionType = {
        type: fetchOffer.fulfilled.type,
        payload: stateWithOffer.offer,
      };

      const result = offerReducer(loadingState, actionType);
      expect(result.loading).toBeFalsy();
    });

    it('should return a state with updated offer when fetchOffer is fulfilled', () => {
      const actionType = {
        type: fetchOffer.fulfilled.type,
        payload: stateWithOffer.offer,
      };

      const result = offerReducer(loadingState, actionType);
      expect(result.offer).toEqual(stateWithOffer.offer);
    });

    it('should return a state with added error when fetchOffer is rejected', () => {
      const actionType = {
        type: fetchOffer.rejected.type,
        payload: error,
      };

      const result = offerReducer(initialState, actionType);
      expect(result.error).toEqual(error.message);
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
        payload: stateWithOffer.offer,
      };

      const result = offerReducer(rejectedState, actionType);
      expect(result.error).toBeNull();
    });
  });

  describe('toggleFavorite', () => {
    it('should return a state with updated offer when toggleFavorite is fulfilled', () => {
      const actionType = {
        type: toggleFavorite.fulfilled.type,
        payload: stateWithUpdatedOffer.offer,
      };

      const result = offerReducer(stateWithOffer, actionType);
      expect(result.offer).toEqual(stateWithUpdatedOffer.offer);
    });
  });
});
